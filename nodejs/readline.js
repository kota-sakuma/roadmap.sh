import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('名前を入力してください: ', (answer) => {
  console.log(`${answer}さん、こんにちは！`);
  rl.close();
});
