class User {
  // 静的プロパティとして WeakMap を定義（クラス専用のプライベートストレージ）
  // # をつけるとプライベート（クラス内部からのみアクセス可能）
  // # なしでも動作するが、外部から User.privateData でアクセス可能になってしまう
  static #privateData = new WeakMap();

  constructor(id, password) {
    // インスタンス(this)をキーにして、秘密のパスワードを保存
    User.#privateData.set(this, { password: password });
    this.id = id;
  }

  checkPassword(input) {
    // 内部からはアクセス可能
    return User.#privateData.get(this).password === input;
  }
}

// # なしの場合の例（コメントアウト）:
// class User {
//   static privateData = new WeakMap();  // 外部から User.privateData でアクセス可能
//   constructor(id, password) {
//     User.privateData.set(this, { password: password });
//     this.id = id;
//   }
// }

const me = new User("admin", "secret123");
console.log(me.password); // undefined (アクセスできない)
console.log(me.id); // admin
