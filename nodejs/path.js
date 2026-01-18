import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';
import path from 'node:path';

// スクリプトと同じ階層にある 'package.json' を安全に指定
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
console.log(basename);
const targetPath = path.join(__dirname, 'package.json');

async function loadConfig() {
  const data = await fs.readFile(targetPath, 'utf-8');
  console.log(data);
}

loadConfig();
