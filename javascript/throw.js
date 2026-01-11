const checkAge = (age) => {
  if (age < 0) {
    // ユーザー定義の例外を投げる
    throw new Error("年齢にマイナスの値は入力できません。");
  }
  return "登録完了";
};

try {
  console.log(checkAge(-5)); // ここでthrowが発生
  console.log("この行は実行されません");
} catch (error) {
  // throwされた内容がerror引数に渡される
  console.error("エラーをキャッチしました: " + error.message);
}
