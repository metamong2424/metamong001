const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I compleeted successfully");
    // reject("I failed");
  }, 1000);
});

myPromise
  .then((done) => {
    console.log("done:", done);
  })
  .catch((err) => {
    console.log("err:", err);
  });
