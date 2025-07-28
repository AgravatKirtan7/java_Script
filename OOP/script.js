'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const kirtan = new Person('kirtan', 2002);

// console.log(kirtan instanceof Person); // true

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

// Test the method
// kirtan.calcAge();

class personCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2025 - this.birthYear);
  }
}

const jessica = new personCl('jessica', 1996);
// console.log(jessica);
// jessica.calcAge();

const acc = {
  owner: 'me',
  movements: [200, 300, 400, 500],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

// class bankAccount{
//   constructor(owner, movements) {
//     this.owner = owner;
//     this.movements = movements;
//   }
// #movements =[]

// }
// const acc1 = new bankAccount('me', [200, 300, 400, 500]);
// console.log(acc1);

// console.log(acc1.#movements);

// console.log(acc.latest);

//-----------------------------coding challenge-1 -----------------------------------------------

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelarte = function () {
  this.speed += 10;
  console.log(`${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// bmw.accelarte();
// bmw.accelarte();
// bmw.brake();
// bmw.accelarte();

// console.log(bmw);
// console.log(mercedes);

//----------------------------coding challenge-2 -----------------------------------------------

class car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelarte() {
    this.speed += 10;
    console.log(`${this.speed}km/h`);
  }
  break() {
    this.speed -= 5;
    console.log(`${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}

////-------------------------------------coding challenge-3 -----------------------------------------------

const ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

ev.prototype = Object.create(Car.prototype);

ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

// const tesla = new ev('tesla', 120, 23);
// tesla.chargeBattery(50);
// tesla.accelerate();
// tesla.brake();

//----------------------------coding challenge-4 -----------------------------------------------

class evClass extends ev {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  changeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate(speed) {
    this.speed += 20;
    this.#charge--;
    return this;
  }
  brake() {
    this.speed -= 5;
    return this;
  }
}

// const a = new evClass('tesla', 120, 23);
a.changeBattery(50).accelerate(50).brake();
