setImmediate(() => {
  console.log("immediate");
});

ProcessingInstruction.nextTick(() => {
  console.log("nextTick");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => console.log("promise"));
