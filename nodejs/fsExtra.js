import fs from 'fs-extra';

async function backupConfig() {
  try {
    // 1. JSONを直接読み込む (JSON.parse不要)
    const config = await fs.readJson('./package.json');

    // 2. ディレクトリがなければ作成し、ファイルを書き込む
    // 標準fsだとまずmkdirが必要だが、outputJsonなら一気にやってくれる
    await fs.outputJson('./backup/package.bak.json', config);

    console.log('バックアップが完了しました！');
  } catch (err) {
    console.error(err);
  }
}

backupConfig();
