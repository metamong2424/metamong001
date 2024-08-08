// const fs = require("fs");

// const writeStream = fs.createWriteStream("./writeme2.txt");
// writeStream.on("finish", () => {
//   console.log("파일쓰기완료");
// });

// writeStream.write("이 편지를 쓸거에요...\n");
// writeStream.write("한번 더 이 편지를 쓸거에요...");
// writeStream.end();

const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2-2.txt");
writeStream.on("finish", () => {
  console.log("파일쓰기완료");
});

const data = ["00001\n", "00011\n", "00111\n", "01111\n", "11111"];

for (let i = 0; i < data.length; i++) {
  writeStream.write(data[i]);
}

writeStream.end();
