const fs = require('fs');
const os = require('os');
const cp = require('child_process');
const path = require('path');
const htmlEntities = require('html-entities');
const markdownToText = require('markdown-to-text').default;

const HELP_URL_GEX = 'https://github.com/tj/git-extras/blob/master/Commands.md#git-${name}';
const HELP_URL_GEC = 'https://github.com/unixorn/git-extra-commands/blob/master/README.md';
const HELP_URL_GEI = 'https://github.com/nodef/extra-git/wiki/${name}';
const RDESC_GEX_ETC = /^\s+\"([\w-]+):\s*(.*?)\"(?:\s*\\)$/gm;
const RDESC_GEX_MAN = /^\s+-\s+\*\*([\w-]+)\(\d\)\*\*\s(.*)$/gm;
const RDESC_GEC     = /^\| +`([^`\s=]+)[^`]*`\s+(?:\|[^|]+)?\| *([^\n]*) *\|$/gm;
const RNOT_TEXT = /[^\w\s\'\(\)-\/]|\s*\.?\s*$/g;
const RSHE_BANG = /^(#!\s*\S+\s+\S+)\n*/;
const HELP_NAME_SIZE = 26;
const HELP_DESC_SIZE = 64;




function stringLimit(x, n) {
  return x.length <= n? x : x.substring(0, n-4)+' ...';
}

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



function readDescRe(re, pth) {
  var d = readFile(pth), m, a = new Map();
  while ((m=re.exec(d)) != null)
    a.set(m[1].replace(/^git-/g, ''), m[2].replace(RNOT_TEXT, '')+'.');
  return a;
}

function readDescGex(dir) {
  var etc = readDescRe(RDESC_GEX_ETC, `${dir}/etc/git-extras.fish`);
  var man = readDescRe(RDESC_GEX_MAN, `${dir}/man/git-extras.md`);
  return new Map([...etc, ...man]);
}

function readDesc(dir, name) {
  if (name === 'git-extras') return readDescGex(dir);
  return readDescRe(RDESC_GEC, `${dir}/README.md`);
}

function readDescBin() {
  var a = new Map();
  for (var f of fs.readdirSync('bin')) {
    var d = readFile(`bin/${f}`);
    var name = f.replace(/\..*/, '');
    var desc = d.match(/^##\s*(.*)$/m)[1];
    a.set(name, desc);
  }
  return a;
}



function copyBin(dir, desc, msg) {
  fs.mkdirSync('bin', {recursive: true});
  for (var f of fs.readdirSync(dir)) {
    if (f === 'git-extras') continue;
    var g = f.replace(/^git-/g, '');
    var d = readFile(`${dir}/${f}`);
    var c = desc.get(g)||'';
    d = d.replace(RSHE_BANG, `$1\n## ${c}\n${msg}\n\n`)
    writeFile(`bin/${g}.sh`, d);
  }
}


function copyMan(dir) {
  fs.mkdirSync('man', {recursive: true});
  if (!fs.existsSync(dir)) return;
  for (var f of fs.readdirSync(dir)) {
    if (path.extname(f) !== '.md') continue;
    if (f === 'git-extras.md') continue;
    if (f === 'Readme.md') continue;
    if (f === 'Home.md') continue;
    var g = f.replace(/^git-|\.md$/g, '');
    var d = readFile(`${dir}/${f}`);
    d = markdownToText(d);
    d = htmlEntities.decode(d);
    writeFile(`man/${g}.txt`, d);
  }
}


function copyLicense(pth, name) {
  cp.execSync(`cp -f "${pth}" "LICENSE-${name}"`);
}



function readHelp() {
  var a = '';
  for (var [name, desc] of readDescBin())
    a += ` ${name.padEnd(HELP_NAME_SIZE)} ${stringLimit(desc, HELP_DESC_SIZE)}\n`;
  var d = readFile('man/help.txt');
  return d.replace('${commands}', a);
}


function readIndex(gei, gex, gec) {
  var a = '';
  var names = [...gei.keys(), ...gex.keys(), ...gec.keys()].sort();
  for (var name of names) {
    var desc = gei.get(name)||gex.get(name)||gec.get(name);
    a += `| [${name}] | ${stringLimit(desc, HELP_DESC_SIZE)} |\n`;
  }
  a += `\n\n`;
  for (var name of gec.keys())
    a += `[${name}]: ${HELP_URL_GEC.replace('${name}', name)}\n`;
  for (var name of gex.keys())
    a += `[${name}]: ${HELP_URL_GEX.replace('${name}', name)}\n`;
  for (var name of gei.keys())
    a += `[${name}]: ${HELP_URL_GEI.replace('${name}', name)}\n`;
  return a;
}



function copy(url, f=true) {
  var name = url.replace(/.*\//, '');
  var msg = `## Source: ${name}`;
  var dir  = fetchSuper(url);
  var desc = readDesc(dir, name);
  if (f) copyBin(`${dir}/bin`, desc, msg);
  if (f) copyMan(`${dir}/man`);
  if (f) copyLicense(`${dir}/LICENSE`, name);
  cleanSuper(dir);
  return desc;
}


function main(f=true) {
  var gei = readDescBin();
  var gec = copy('https://github.com/unixorn/git-extra-commands', f);
  var gex = copy('https://github.com/tj/git-extras', f);
  if (f) copyMan('wiki');
  if (f) writeFile('man/help.txt', readHelp());
  writeFile('index.log', readIndex(gei, gex, gec));
}
main(process.argv[2] !== 'local');
