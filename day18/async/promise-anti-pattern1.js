function myWork(work) {
  return new Promise((resolve, reject) => {
    if (work === "done") {
      resolve("게임가능");
    } else {
      reject(new Error("게임불가능"));
    }
  });
}

// 첫 번째 호출
myWork("done").then(
  function (value) {
    console.log(value);
  },
  function (err) {
    console.error(err);
  }
);

// 두 번째 호출
myWork("doing")
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.error(err);
  });
