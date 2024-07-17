const allTrucks = [2, 5, 7, 10];

const initialCapacity = 0;
const allTonnage = allTrucks.reduce((totalCapacity, currrentCapacity) => {
  console.log("totalCapacity:" + totalCapacity);
  console.log("currrentCapacity:" + currrentCapacity);
  totalCapacity = totalCapacity + currrentCapacity;

  return totalCapacity;
}, initialCapacity);

console.log(allTonnage);
