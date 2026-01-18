class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // 運用エラー（予測可能）であることを示す

    // スタックトレースからこのコンストラクタ呼び出しを除外する（デバッグしやすくするため）
    Error.captureStackTrace(this, this.constructor);
  }
}

// 使用例
const err = new AppError('指定されたユーザーが見つかりません', 404);
console.log(err.name); // Error
console.log(err.message); // 指定されたユーザーが見つかりません
console.log(err.statusCode); // 404
console.log(err.stack); // どこでエラーが発生したかの詳細な履歴
