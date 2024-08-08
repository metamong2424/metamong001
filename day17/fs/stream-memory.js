const fs = require("fs");

console.log("before:", process.memoryUsage().rss);

const readSteam = fs.createReadSteam("./readme2.txt");
const writeSteam = fs.createWriteSteam("./reademe4.txt");

readStream.pipe(writeStream);
readSteam.on("end", () => {
  console.log("stream:", process.memoryUsage().rss);
});
