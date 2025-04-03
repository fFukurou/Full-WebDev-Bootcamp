const franc = require("franc");
const langs = require('langs');
const color = require('colors');

const langCode = franc("俺は進みつずけるてきを駆逐艦資料まで");
if (langCode === 'und') {
    console.log("SORRY, COULDN'T FIGURE IT OUT!");
}


const language = langs.where("3", langCode);
console.log(language.local.magenta);