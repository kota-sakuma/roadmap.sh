function drawOmikuji() {
  return new Promise((resolve, reject) => {
    console.log("おみくじを引いています...");

    setTimeout(() => {
      const num = Math.random(); // 0〜1の乱数
      if (num < 0.1) {
        resolve("大吉！");
      } else if (num < 0.3) {
        resolve("中吉！");
      } else if (num < 0.5) {
        resolve("小吉！");
      } else if (num < 0.7) {
        resolve("吉！");
      } else if (num < 0.9) {
        resolve("末吉！");
      } else {
        reject("凶...（やり直し）");
      }
    }, 1500);
  });
}

// 実行
drawOmikuji()
  .then((result) => console.log("結果:", result))
  .catch((error) => console.warn("残念:", error));
