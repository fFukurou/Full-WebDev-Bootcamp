const fs = require('fs');
const folderName = process.argv[2] || "Project";

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!");
//     if (err) throw err;
// });

try {
    fs.mkdirSync(`Section-31-NodeStart/${folderName}`);
    fs.writeFileSync(`Section-31-NodeStart/${folderName}/index.html`, '');
    fs.writeFileSync(`Section-31-NodeStart/${folderName}/app.css`, '');
    fs.writeFileSync(`Section-31-NodeStart/${folderName}/app.js`, '');
} catch (e) {
    console.log("SOMETHING WENT WRONG", e);
}
