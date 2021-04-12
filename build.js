const fs = require('fs');
const os = require('os');
const cp = require('child_process');
const path = require('path');
const htmlEntities = require('html-entities');
const markdownToText = require('markdown-to-text').default;

const SUPER_URL = 'https://github.com/tj/git-extras';
const RDESCETC = /^\s+\"([\w-]+):\s*(.*?)\"(?:\s*\\)$/gm;
const RDESCMAN = /^\s+-\s+\*\*([\w-]+)\(\d\)\*\*\s(.*)$/gm;
const RNOTTEXT = /[^\w\s\'\(\)-\/]/g;
const RSHEBANG = /^(#!\S+\s+\S+)\n*/;




function readFile(f) {
  var d = fs.readFileSync(f, 'utf8');
  return d.replace(/\r?\n/g, '\n');
}


function writeFile(f, d) {
  d = d.replace(/\r?\n/g, os.EOL);
  fs.writeFileSync(f, d);
}


function fetchSuper() {
  var cwd = fs.mkdtempSync('temp-');
  cp.execSync(`git clone ${SUPER_URL} .`, {cwd});
  return cwd;
}


function cleanSuper(dir) {
  cp.execSync(`rm -rf "${dir}"`);
}


function readDescEtc(dir) {
  var f = path.join(dir, 'etc', 'git-extras.fish');
  var d = readFile(f), m, a = new Map();
  while ((m=RDESCETC.exec(d)) != null)
    a.set(m[1], m[2]);
  return a;
}


function readDescMan(dir) {
  var f = path.join(dir, 'man', 'git-extras.md');
  var d = readFile(f), m, a = new Map();
  while ((m=RDESCMAN.exec(d)) != null)
    a.set(m[1], m[2].replace(RNOTTEXT, ''));
  return a;
}


function readDesc(dir) {
  return readDescEtc(dir);
}


function copyBin(dir, desc) {
  fs.mkdirSync('bin', {recursive: true});
  var bin = path.join(dir, 'bin');
  for (var f of fs.readdirSync(bin)) {
    if (f === 'git-extras') continue;
    var g = f.replace(/^git-/g, '');
    var d = readFile(`${bin}/${f}`);
    var c = desc.get(g)||'';
    d = d.replace(RSHEBANG, `$1\n## ${c}\n\n`)
    writeFile(`bin/${g}.sh`, d);
  }
}


function copyMan(dir) {
  fs.mkdirSync('man', {recursive: true});
  var man = path.join(dir, 'man');
  for (var f of fs.readdirSync(man)) {
    if (path.extname(f) !== '.md') continue;
    if (f === 'git-extras.md') continue;
    if (f === 'Readme.md') continue;
    var g = f.replace(/^git-|\.md$/g, '');
    var d = readFile(`${man}/${f}`);
    d = markdownToText(d);
    d = htmlEntities.decode(d);
    writeFile(`man/${g}.txt`, d);
  }
}


function main() {
  var dir  = fetchSuper();
  var desc = readDesc(dir);
  copyBin(dir, desc);
  copyMan(dir);
  cleanSuper(dir);
}
main();
