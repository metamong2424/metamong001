const path = require("path");

const string = __filename;

console.log("path.sep:", path.sep); // 경로 구분자 (윈도우에서는 \, 유닉스 계열에서는 /)
console.log("path.delimiter:", path.delimiter); // 환경 변수 구분자 (윈도우에서는 ;, 유닉스 계열에서는 :)

console.log("-----------------------");
console.log("path.dirname():", path.dirname(string)); // 디렉토리 이름을 반환
console.log("path.extname():", path.extname(string)); // 파일의 확장자를 반환
console.log("path.basename():", path.basename(string)); // 파일의 전체 이름을 반환
console.log(
  "path.basename - extname:",
  path.basename(string, path.extname(string))
); // 확장자를 제외한 파일 이름을 반환

console.log("-----------------------");
console.log("path.parse():", path.parse(string)); // 경로를 객체 형태로 반환
console.log(
  "path.format():",
  path.format({
    dir: "C:\\Users\\zerocho",
    name: "path",
    ext: ".js",
  })
); // 객체를 경로 문자열로 반환

console.log(
  "path.normalize():",
  path.normalize("C://users\\\\zerocho\\path.js")
); // 경로를 정규화하여 반환

console.log("----------------------");
console.log("path.isAbsolute(C:\\\\):", path.isAbsolute("C:\\")); // 경로가 절대 경로인지 확인
console.log("path.isAbsolute(.\\home):", path.isAbsolute("./home")); // 경로가 절대 경로인지 확인

console.log("----------------------");
console.log(
  "path.relative():",
  path.relative("C:\\users\\zerocho\\path.js", "C:\\")
); // 두 경로 간의 상대 경로를 반환
console.log(
  "path.join():",
  path.join(__dirname, "..", "..", "..", "users", ".", "/zerocho")
); // 여러 경로를 합쳐 하나의 경로로 반환
console.log(
  "path.resolve():",
  path.resolve(__dirname, "..", "..", "users", ".", "/zerocho")
); // 여러 경로를 합쳐 절대 경로로 반환
