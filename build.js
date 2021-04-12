const fs = require('fs');
const os = require('os');
const cp = require('child_process');
const path = require('path');
const htmlEntities = require('html-entities');
const markdownToText = require('markdown-to-text').default;

const RDESC_GEX_ETC = /^\s+\"([\w-]+):\s*(.*?)\"(?:\s*\\)$/gm;
const RDESC_GEX_MAN = /^\s+-\s+\*\*([\w-]+)\(\d\)\*\*\s(.*)$/gm;
const RDESC_GEC     = /^\| +`([^`\s=]+)[^`]*`\s+(?:\|[^|]+)?\| *([^\n]*) *\|$/gm;
const RNOT_TEXT = /[^\w\s\'\(\)-\/]/g;
const RSHE_BANG = /^(#!\s*\S+\s+\S+)\n*/;
const HELP_PAD  = 32;



function readFile(f) {
  var d = fs.readFileSync(f, 'utf8');
  return d.replace(/\r?\n/g, '\n');
}


function writeFile(f, d) {
  d = d.replace(/\r?\n/g, os.EOL);
  fs.writeFileSync(f, d);
}


function fetchSuper(url) {
  var cwd = fs.mkdtempSync('temp-');
  cp.execSync(`git clone ${url} .`, {cwd});
  return cwd;
}


function cleanSuper(dir) {
  cp.execSync(`rm -rf "${dir}"`);
}


function readDescGexEtc(dir) {
  var f = path.join(dir, 'etc', 'git-extras.fish');
  var d = readFile(f), m, a = new Map();
  while ((m=RDESC_GEX_ETC.exec(d)) != null)
    a.set(m[1], m[2]);
  return a;
}


function readDescGexMan(dir) {
  var f = path.join(dir, 'man', 'git-extras.md');
  var d = readFile(f), m, a = new Map();
  while ((m=RDESC_GEX_MAN.exec(d)) != null)
    a.set(m[1], m[2].replace(RNOT_TEXT, ''));
  return a;
}


function readDescGex(dir) {
  var a = readDescGexEtc(dir);
  var b = readDescGexMan(dir);
  console.log(a);
  console.log(b);
  return new Map([...readDescGexEtc(dir), ...readDescGexMan(dir)]);
}


function readDesc(dir, name) {
  if (name === 'git-extras') return readDescGex(dir);
  return readDescGec(dir);
}


function readDescGec(dir) {
  var f = path.join(dir, 'README.md');
  var d = readFile(f), m, a = new Map();
  while ((m=RDESC_GEC.exec(d)) != null)
    a.set(m[1].replace(/^git-/g, ''), m[2].replace(RNOT_TEXT, ''));
  return a;
}


function copyBin(dir, desc, msg) {
  fs.mkdirSync('bin', {recursive: true});
  var bin = path.join(dir, 'bin');
  for (var f of fs.readdirSync(bin)) {
    if (f === 'git-extras') continue;
    var g = f.replace(/^git-/g, '');
    var d = readFile(`${bin}/${f}`);
    var c = desc.get(g)||'';
    d = d.replace(RSHE_BANG, `$1\n## ${c}\n${msg}\n\n`)
    writeFile(`bin/${g}.sh`, d);
  }
}


function copyMan(dir) {
  fs.mkdirSync('man', {recursive: true});
  var man = path.join(dir, 'man');
  if (!fs.existsSync(man)) return;
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


function copyLicense(dir, name) {
  cp.execSync(`cp -f "${dir}/LICENSE" "LICENSE-${name}"`);
}


function readHelp() {
  var a = '';
  for (var f of fs.readdirSync('bin')) {
    var d = readFile(`bin/${f}`);
    var name = f.replace(/\..*/, '');
    if (!d.match(/^##\s+(.*)$/m)) console.log(d);
    var desc = d.match(/^##\s+(.*)$/m)[1];
    a += ` ${name.padEnd(HELP_PAD)} ${desc}\n`;
  }
  var d = readFile('man/help.txt');
  return d.replace('${commands}', a);
}


function copy(url) {
  var name = url.replace(/.*\//, '');
  var msg = `## Source: ${name}`;
  var dir  = fetchSuper(url);
  var desc = readDesc(dir, name);
  copyBin(dir, desc, msg);
  copyMan(dir);
  copyLicense(dir, name);
  cleanSuper(dir);
}


function main() {
  copy('https://github.com/unixorn/git-extra-commands');
  copy('https://github.com/tj/git-extras');
  writeFile('man/help.txt', readHelp());
}
main();
