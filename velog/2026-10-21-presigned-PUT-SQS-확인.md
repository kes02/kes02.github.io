---
title: "presigned PUT + SQS 로직 추가"
date: "2026-10-21T08:40:40.432Z"
slug: "presigned-PUT-SQS-확인"
url: "https://velog.io/@kes02/presigned-PUT-SQS-%ED%99%95%EC%9D%B8"
tags: ["SQS","SW 마에스트로","데이터","버디버드"]
velog_id: "0414445b-a768-4a21-9ee0-53fb1bfd3d58"
---
앞에서 안드로이드 사용자 녹음만 통째로 유실된 이야기를 했었다. 서버가 파일 내용을 판별해 allow 리스트에 대조하는데, 안드로이드 녹음만 `video/mp4`로 떨어져 목록에 없었고, 검증이 DB 저장과 S3 업로드보다 앞에 있어서 400 한 번에 아무것도 안 남았다는 내용이었다.

이 문제에서 해결 방법은 두 가지였다. 목록에 `video/mp4`를 한 줄 더 넣거나, 업로드 경로 자체를 바꾸거나. 현재는 후자를 택하게 되었다.

## 업로드 이슈 외에 확인된 여러 문제

MIME 말고도 구조에서 걸리는 문제점이 세 가지 있었다.

**서버가 파일 바이트를 통과:** multipart로 받으면 5MB 오디오가 애플리케이션 메모리를 거쳐 S3로 다시 나가며 업로드 대역폭과 요청 타임아웃을 서버가 감당해야한다.

**검증 실패는 데이터X:** 400을 받은 녹음은 DB에도 S3에도 흔적이 없어서 확인이 어려웠다. 라벨링 도구에서 사람이 직접 보고도 '삭제된 단어'라고 표시된걸 사용자가 지운 것과 애초에 안 올라간 것을 구분할 방법이 없었다. 실패가 상태가 아니라 정확한 로직에 의해 기록되면 데이터가 누락이 된 문제를 놓치기 쉬웠다.

**타입을 선언하는 쪽과 판별하는 쪽이 다르다:** 클라이언트는 확장자만 보고 `audio/x-m4a`라 말하고, 서버는 헤더를 보고 `video/mp4`라 읽는다. 양쪽 다 기준에선 맞았고 그 이유로 데이터가 누락되었다.

## 변경점

클라이언트가 S3에 직접 올리고 서버는 앞뒤만 확인하는 방식으로 변경했다.

**1. 클라이언트는 요청을 보낸다.**

```python
class UploadRequest(BaseRequest):
    content_type: str
    file_size: int = Field(gt=0)
```

파일은 보내지 않고 이런 타입에 이만한 크기를 올리겠다만 서버에 request 한다.

**2. 서버가 판단**

```python
RECORDING_TYPES = {
    "audio/mp4": "m4a",
    "audio/x-m4a": "m4a",
    "audio/m4a": "m4a",
    "audio/wav": "wav",
    "audio/x-wav": "wav",
    "audio/mpeg": "mp3",
}

extension = RECORDING_TYPES.get(data.content_type)

if extension is None:
    raise InvalidWordRecordingError

if data.file_size > MAX_RECORDING_BYTES:
    raise FileSizeExceededError
```

타입 맵이 확장자 결정까지 한다.

**3. 파일 행을 `pending`으로 먼저 만든다.**

```python
file_id = uuid7()
file_path = f"user/{word.user_id}/word/{word.id}/{file_id}"
file_name = f"recording.{extension}"

recording_file = File(
    id=file_id,
    file_name=file_name,
    file_path=file_path,
    file_size=data.file_size,
    file_type=data.content_type,
    is_deleted=False,
    status=FileStatusEnum.PENDING.value,
)
```

`files` 테이블에 `status` 컬럼이 생겼고(`pending` / `uploaded` / `rejected`), 업로드는 **상태**를 가질 수 있게 바뀌었다. object key도 서버가 정하며 클라이언트가 경로를 만들지 않게 변경했다.

**4. presigned PUT URL을 발급**

```python
def generate_presigned_upload_url(self, *, path: str, file_type: str, file_size: int) -> str:
    return self._client.generate_presigned_url(
        ClientMethod="put_object",
        Params={
            "Bucket": config.S3_BUCKET_NAME,
            "Key": path,
            "ContentType": file_type,
            "ContentLength": file_size,
        },
        ExpiresIn=UPLOAD_URL_EXPIRES_IN,  # 300초
    )
```

`ContentType`과 `ContentLength`가 서명에 들어가며, 클라이언트가 다른 타입이나 다른 크기로 PUT하면 S3가 서명 불일치로 거절한다. 응답에는 `headers: {"Content-Type": ...}`를 같이 내려서 클라이언트가 어떤 헤더로 보내야 하는지 알려준다.

**5. 클라이언트가 S3에 직접 PUT**

**6. S3 이벤트가 SQS로 들어오면 확정**

```python
async def confirm_upload(body: dict) -> None:
    await uploads.process(key=body["detail"]["object"]["key"], size=body["detail"]["object"]["size"])
```

```python
file = await db.scalar(stmt)

if file is None or file.status != FileStatusEnum.PENDING.value:
    logger.info("확정할 업로드가 없어 건너뜀; key=%s", key)
    return
```

consumer가 `pending` 행을 찾아 `uploaded`로 바꾸고, 선언된 크기 대신 **S3가 실제로 받은 크기**를 기록한다. 이미 확정됐거나 없는 키면 그냥 넘어가며 중복은 처리되지 않도록 한다.

## 앞으로 확인 가능한 부분

**업로드가 상태를 가지고 있다.** `pending`인 채 안 넘어온 행은 그 자체로 '발급은 됐는데 안 올라왔다'는 기록이다. 예전에는 같은 상황이 DB에 아무 흔적도 안 남았지만 이제는 플랫폼별로 `pending` 만 확인하면 된다.

**업로드로 인해 사용자에게 문제는 없다.** 단어당 녹음 개수 상한을 셀 때 `pending`은 만료 전인 것만 셈으로 사용자에게는 문제가 전혀 없다.

```python
or_(
    File.status == FileStatusEnum.UPLOADED.value,
    and_(
        File.status == FileStatusEnum.PENDING.value,
        File.created_at > datetime.now(UTC) - timedelta(seconds=UPLOAD_URL_EXPIRES_IN),
    ),
)
```

업로드 트래픽이 S3와 클라이언트 사이에서만 오가기 때문에 서버의 부담은 준다.

## 반영되지 않은 부분

**내용 기반 검증은 없다.** 예전 구조는 libmagic으로 실제 바이트를 읽었다. 지금은 클라이언트가 말한 `content_type`을 믿고, S3가 그 헤더를 강제할 뿐이다. `audio/x-m4a`라고 선언하고 아무 바이트나 PUT하면 된다.

```python
try:
    photo = await prepare_uploaded_photo(content)
except InvalidProfilePhotoError:
    logger.warning("이미지 검증 실패로 업로드를 거부함; key=%s", key)
    await storage.delete(path=key)
    await reject(db=db, file=file)
    return
```

검증 실패가 `rejected` 상태로 남고 S3 객체도 지워진다. 

## 느낀점

업로드 사고를 MIME 목록 한 줄로 막을 수도 있었지만 그렇게 했으면 다음 포맷이 추가될 때 같은 자리에서 또 문제가 발생했을 것 같다.

바꾸고 나서 실제로 달라진 건 성능보다 **확인 가능한 점**이다. 업로드가 되면서 각 단계가 상태로 남으면, 실패는 사라지는 대신 확인이 가능해지고 수집 파이프라인에서는 이 부분으로 이제 실패율을 보면서 데이터의 업로드가 잘 되고 있는지를 확인할 수 있게 되었다.
