import { glob, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

async function createLogs() {
  for (let i = 1; i <= 3; i++) {
    await writeFile(`${i}.log`, 'a');
    console.log(`${i}.log ファイルを作成しました`);
  }
}

// ログファイルの生成
createLogs();

async function cleanLogs() {
  // スクリプトと同じディレクトリ内の .log ファイルをすべて削除
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  // globパターンでは / を使う必要がある（path.join は使わない）
  const logPattern = path.posix.join(__dirname.replace(/\\/g, '/'), '*.log');

  try {
    for await (const filePath of glob(logPattern)) {
      await unlink(filePath);
      console.log(`削除完了: ${path.basename(filePath)}`);
    }
  } catch (err) {
    console.error('エラーが発生しました:', err);
  }
}

cleanLogs();
