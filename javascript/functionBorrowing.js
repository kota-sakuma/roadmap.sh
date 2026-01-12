const person1 = {
  fullName: function(city, country) {
    return `${this.firstName} ${this.lastName} (${city}, ${country})`;
  }
};

const person2 = { firstName: "太郎", lastName: "山田" };

// person1のメソッドを、thisをperson2に指定して呼び出す
console.log(person1.fullName.call(person2, "東京", "日本"));
// 出力: 山田 太郎 (東京, 日本)

console.log(person1.fullName.apply(person2, ["東京", "日本"]));
