import chokidar from 'chokidar';

// 監視を開始
const watcher = chokidar.watch('.', {
  ignored: /(^|[\/\\])\../, // ドットファイル（隠しファイル）を無視
  persistent: true // 監視を継続する
});

// イベントリスナーの設定
watcher
  .on('add', (path) => console.log(`ファイル ${path} が追加されました`))
  .on('change', (path) => console.log(`ファイル ${path} が更新されました`))
  .on('unlink', (path) => console.log(`ファイル ${path} が削除されました`))
  .on('error', (error) => console.error(`エラー発生: ${error}`));
