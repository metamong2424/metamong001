// const { Worker, isMainThread, parentPort } = require("worker_threads");

// if (isMainThread) {
//   // 부모일 때
//   const worker = new Worker(__filename);
//   worker.on("message", (message) => console.log("from worker", message));
//   worker.on("exit", () => console.log("worker exit"));
//   worker.postMessage("ping");
// } else {
//   // 워커일 때
//   parentPort.on("message", (value) => {
//     console.log("from parent", value);
//     parentPort.postMessage("pong");
//     parentPort.close();
//   });
// }

// // Output
// // from parent ping
// // from worker pong
// // worker exit

const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const mid = Math.floor(numbers.length / 2);

  const worker1 = new Worker(__filename, { workerData: numbers.slice(0, mid) });
  const worker2 = new Worker(__filename, { workerData: numbers.slice(mid) });

  let sum1, sum2;

  worker1.on("message", (message) => {
    sum1 = message;
    if (sum1 !== undefined && sum2 !== undefined) {
      console.log("Total Sum:", sum1 + sum2);
    }
  });

  worker2.on("message", (message) => {
    sum2 = message;
    if (sum1 !== undefined && sum2 !== undefined) {
      console.log("Total Sum:", sum1 + sum2);
    }
  });

  worker1.on("exit", () => console.log("Worker 1 exit"));
  worker2.on("exit", () => console.log("Worker 2 exit"));
} else {
  const numbers = workerData;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(sum);
  parentPort.postMessage(sum);
}
