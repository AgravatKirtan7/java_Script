'use strict';

// function calcAge(year) {
//   const age = 2025 - year;
//   //   console.log(firstName);

//   function PrintAge() {
//     let output = `${firstName}, you are ${age}-years and you were born in ${year}`;
//     // console.log(output);

//     if (year >= 1981 && year <= 1996) {
//       var millenial = true;
//       const str = `oh , your are an millenial `;
//       //   console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'new output';
//     }
//     // console.log(str);
//     // console.log(millenial);

//     // console.log(output);
//   }
//   PrintAge();
//   return age;
// }

// const firstName = 'kirtan';
// calcAge(1982);

//hoisting with variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'kirtan';
let job = 'intern';
const year = 2025;

//function hoisting

// console.log(add(5, 6));
// console.log(addExpr(8, 9));
// console.log(addArrow(5, 6));

//we can only use this function for hoisting not expression and arrow
function add(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example;
//it deletes the product because the numproducts is undefine and undefine is falsy value so gets true and executes the function
// if (!numProducts) {
//   deleteShoppingCart();
// }
var numProducts = 10;
function deleteShoppingCart() {
  console.log('deleted !!!');
}

// -------
// ------
// -----
// ----
// ---
// --
// -

//this keyword

// console.log(this);

// const calcAge = birthYear => {
//   console.log(2025 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const person = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2025 - this.year);
//   },
// };

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = person.calcAge;

// var firstName = 'kirtan ';

// const person = {
//   firstName: 'kirtan',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2025 - this.year);
//     const self = this;
//     const isMillenial = function () {
//       console.log(self.year >= 1981 && self.year <= 1996);

//       //this line gives error so stored in self variable and then used to avoid the error;
//       //   console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: function () {
//     console.log(`hey ${this.firstName}!!`);
//   },
// };

// person.greet;
// person.calcAge();

let age = 20;
let oldAge = age;
age = 21;

console.log(age);
console.log(oldAge);

const me = {
  name: 'kirtan',
  age: 30,
};

const friend = me;
friend.age = 22;
console.log('friend', friend);
console.log('me', me);

const personCopy = Object.assign({}, me);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before:', jessica);
console.log('After:', jessicaCopy);

// Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);
