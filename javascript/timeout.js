// 1. setTimeout を使って、3秒後に処理を開始する
console.log("準備中... 3秒後にカウントダウンを開始します。");

setTimeout(() => {
  let timeLeft = 5; // 5秒からスタート
  console.log("--- カウントダウン開始！ ---");

  // 2. setInterval を使って、1秒ごとにカウントを減らす
  const intervalId = setInterval(() => {
    if (timeLeft > 0) {
      console.log(`残り: ${timeLeft}秒`);
      timeLeft--;
    } else {
      // 3. 0になったら clearInterval で繰り返しを止める
      console.log("時間切れ！");
      clearInterval(intervalId);
    }
  }, 1000);

}, 3000);
