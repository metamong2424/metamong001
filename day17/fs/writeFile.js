const fs = require("fs").promises;

fs.writeFile("./writeme.txt", "글을 입력해줘..")
  .then(() => {
    return fs.readFile("./writeme.txt");
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
