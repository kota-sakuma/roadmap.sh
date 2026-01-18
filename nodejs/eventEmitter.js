import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

// 1. リスナーの登録 (何度でも反応する)
myEmitter.on('welcome', (name) => {
  console.log(`こんにちは、${name}さん！`);
});

// 2. リスナーの登録 (1回だけ反応する)
myEmitter.once('login', () => {
  console.log('初めてのログインを確認しました。');
});

// 3. イベントの発行
myEmitter.emit('welcome', '田中'); // 田中さん！
myEmitter.emit('welcome', '佐藤'); // 佐藤さん！

myEmitter.emit('login'); // 「初めての...」が表示される
myEmitter.emit('login'); // 2回目なので何も起きない
