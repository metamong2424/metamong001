console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatISThis() {
  console.log("function", this === exports, this === global);
}

whatISThis();
