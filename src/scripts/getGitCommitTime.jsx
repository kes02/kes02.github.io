const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const gitDate = execSync('git log -1 --format=%cd --date=iso-strict').toString().trim();

const formattedDate = new Date(gitDate).toDateString().substring(4);

const data = {
    lastUpdated: formattedDate
};

const filePath = path.join(__dirname, '../data/lastUpdated.json');
fs.mkdirSync(path.dirname(filePath), { recursive: true }); // 폴더가 없으면 만듭니다.
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

console.log(`Git last commit time saved: ${formattedDate}`);