import fs from "fs";

fs.readFile("package.json", (err, data) => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
});
