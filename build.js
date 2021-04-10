const fs = require('fs');
const os = require('os');
const cp = require('child_process');
const path = require('path');

const SUPER_URL = 'https://github.com/tj/git-extras';
const RDESC = /^\s+\"([\w-]+):\s*(.*?)\"(?:\s*\\)$/gm;
const RBANG = /^(#!\S+\s+\S+)/;




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


function readDesc(dir) {
  var f = path.join(dir, 'etc', 'git-extras.fish');
  var d = readFile(f), m, a = new Map();
  while ((m=RDESC.exec(d)) != null)
    a.set(m[1], m[2]);
  return a;
}


function copyBin(dir, desc) {
  var bin = path.join(dir, 'bin');
  for (var f of fs.readdirSync(bin)) {
    if (f === 'git-extras') continue;
    var g = f.replace('git-', '');
    var d = readFile(`${bin}/${f}`);
    var c = desc.get(g)||'';
    d = d.replace(RBANG, `$1\n\n## ${c}`)
    writeFile(`bin/${g}`, d);
  }
}


function copyMan(dir) {
  var man = path.join(dir, 'man');
  for (var f of fs.readdirSync(man)) {
    if (path.extname(f) !== '.md') continue;
    if (f === 'git-extras.md') continue;
    var g = f.replace('git-', '');
    var d = readFile(`${man}/${f}`);
    writeFile(`man/${g}`, d);
  }
}


function main() {
  var dir  = fetchSuper();
  var desc = readDesc(dir);
  copyBin(dir, desc);
  copyMan(dir);
}
main();
