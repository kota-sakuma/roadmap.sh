const mySet = new Set();

mySet.add(1);       // 値を追加
mySet.add(5);
mySet.add(5);       // 重複しているので無視される
console.log(mySet);

// values() メソッドのユースケース
console.log(mySet.values()); // SetIterator { 1, 5 } - イテレータオブジェクトを返す

// 1. for...of ループで使用（最も一般的）
console.log('for...of ループ:');
for (const value of mySet) {
  console.log(value); // 1, 5 を順に出力
}

// 2. 配列に変換して使用
const valuesArray = Array.from(mySet);
console.log('配列に変換:', valuesArray); // [1, 5]

// 3. スプレッド演算子で配列に変換
const spreadArray = [...mySet];
console.log('スプレッド演算子:', spreadArray); // [1, 5]

// 4. 配列メソッドをチェーンして使用
const doubled = Array.from(mySet).map(x => x * 2);
console.log('各値を2倍:', doubled); // [2, 10]

// 5. 最初の値だけ取得
const firstValue = mySet.values().next().value;
console.log('最初の値:', firstValue); // 1

// 注意: Set では values() と keys() は同じ結果を返す
console.log('keys() との比較:', [...mySet.keys()]); // [1, 5] - 同じ結果

console.log(mySet.has(1));    // true (存在チェック)
console.log(mySet.size);      // 2 (要素数)

mySet.delete(5);    // 削除
console.log(mySet);
mySet.clear();      // 全削除
console.log(mySet); // Set(0) {}