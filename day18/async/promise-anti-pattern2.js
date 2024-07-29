function myWork(work) {
  return new Promise((resolve, reject) => {
    resolve(work.toUpperCase());
  });
}

function playGame(work) {
  return new Promise((resolve, reject) => {
    if (work === "DONE") {
      resolve("GO PLAY GAME");
    } else {
      reject(new Error("DON'T"));
    }
  });
}

// myWork 함수 호출 및 결과 처리
myWork("doNe")
  .then(function (result) {
    return playGame(result);
  })
  .then(function (val) {
    console.log(val);
  })
  .catch(function (error) {
    console.error(error);
  });

// 단축된 형태로 myWork 함수 호출 및 결과 처리
myWork("done").then(playGame).then(console.log).catch(console.error);
