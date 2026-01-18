import { globby } from 'globby';

async function findFiles() {
  // 1. 複数のパターンを指定
  // 2. 特定のファイルを除外 (!)
  const paths = await globby(['*.js', '*.json']);

  console.log(paths);
}

findFiles();
