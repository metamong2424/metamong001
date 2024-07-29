function goodPromise(val) {
  return new Promise((resolve, reject) => {
    resolve(val);
  });
}

goodPromise("세상에")
  .then((val) => {
    return val + " 이런";
  })
  .then((result) => {
    console.log(result); // "세상에 이런"
  })
  .catch((error) => {
    console.error(error);
  });

// 주어진 두 번째 코드의 의도를 추측하여 수정
goodPromise("세상에")
  .then((val) => {
    console.log(val + " 이런");
  })
  .catch((error) => {
    console.error(error);
  });
