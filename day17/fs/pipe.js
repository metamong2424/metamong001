const fs = require("fs");

const readSteam = fs.createReadStream("readme4.txt");
const writeSteam = fs.createWriteStream("writeme3.txt");
readStream.pipe(writeStream);
