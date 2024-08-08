// 1기가의 큰 파일을 만드는것이므로 실행하지 말것.
// 오류상태로 그대로 둘것.

const fs = require("fs");
const file = fs.createWriteStream("/big.txt");

for (let i = 0; i < 10000000; i++) {
  file.write("1기가 파일 만들기");
}

file.enx();
