// class Vehicle {
//   constructor(private wheelCount: number) {}
//   showNumberOfWheels() {
//     console.log(`moved ${this.wheelCount} miles`);
//   }
// }

// class MotorCycle extends Vehicle {
//   constructor() {
//     super(2);
//   }
// }

// class Automobile extends Vehicle {
//   constructor() {
//     super(4);
//   }
// }

// const motorCycle = new MotorCycle();
// motorCycle.showNumberOfWheels();
// const autoMobile = new Automobile();
// autoMobile.showNumberOfWheels();

class Vehicle {
  constructor(protected wheelCount: number) {}
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount} miles`);
  }
}

class MotorCycle extends Vehicle {
  constructor() {
    super(2);
  }

  updateWheelCount(newWheelCount: number) {
    this.wheelCount = newWheelCount;
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorCycle = new MotorCycle();
motorCycle.showNumberOfWheels();
const autoMobile = new Automobile();
autoMobile.showNumberOfWheels();
