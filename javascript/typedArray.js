const buffer = new ArrayBuffer(16);
const view = new Uint8Array(buffer);

view[0] = 255;
view[1] = 256;
view[2] = 255;
view[3] = 255;

console.log(view);
console.log(buffer);
