const zlib = require("zlib");
const fs = require("fs");

const readStream = fs.createReadStream("./readme4.txt");
const ZlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./readme4.txt");
readStream.pipe(ZlibStream).pipe(writeStream);
