const map = new Map();

const user = {name: "John", age: 30};

map.set(user, "admin");
map.set(100, "hundred");

console.log(map.get(user));
console.log(map.size);
