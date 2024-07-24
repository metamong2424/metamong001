const os = require("os");

console.log("운영체제 정보-----");
console.log("os.arch():", os.arch()); // CPU 아키텍처를 반환
console.log("os.platform():", os.platform()); // 운영체제 플랫폼을 반환
console.log("os.type():", os.type()); // 운영체제 타입을 반환
console.log("os.uptime():", os.uptime()); // 시스템 부팅 후 경과된 시간을 반환
console.log("os.hostname():", os.hostname()); // 시스템의 호스트 이름을 반환
console.log("os.release():", os.release()); // 운영체제의 버전을 반환

console.log("경로-----");
console.log("os.homedir():", os.homedir()); // 현재 사용자의 홈 디렉토리 경로를 반환
console.log("os.tmpdir():", os.tmpdir()); // 임시 파일의 디렉토리 경로를 반환

console.log("cpu 정보-----");
console.log("os.cpus().length:", os.cpus().length); // CPU 코어의 수를 반환

console.log("메모리 정보-----");
console.log("os.freemem():", os.freemem()); // 사용 가능한 메모리 양을 반환
console.log("os.totalmem():", os.totalmem()); // 전체 메모리 양을 반환
