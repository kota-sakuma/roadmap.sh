import fs from 'node:fs/promises';
import path from 'node:path';

// スクリプトと同じ階層にある 'package.json' を安全に指定
const targetPath = path.join(__dirname, 'package.json');

async function loadConfig() {
  const data = await fs.readFile(targetPath, 'utf-8');
  console.log(data);
}

loadConfig();
