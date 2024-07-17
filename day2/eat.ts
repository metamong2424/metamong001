function eat(calories: number) {
  console.log("I ate " + calories + " calories");
}

function sleepIn(hours: number): string {
  console.log("I slept " + hours + " hours");
  return "";
}

let ate: void = eat(100);
console.log(ate);
let slept: string = sleepIn(10);
console.log(slept);
