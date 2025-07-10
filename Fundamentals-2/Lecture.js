"use strict";

// let hasDriversLicense = false;
// const testPass = true;

// // if(testPass) hasDriverLicense = true;
// if (testPass) hasDriversLicense = true;

// if (hasDriversLicense) {
//   console.log("OKAY !");
// }

//fuctions

// function Logger() {
//   console.log("my name is kirtan");
// }

// Logger();

// function FruitNameAndPrice(name, price) {
//   console.log(`${name} and it's price is ${price}`);
//   let namePrice = name + " " + price;
//   return namePrice;
// }

// // FruitNameAndPrice("orange", 123);
// let fruname = FruitNameAndPrice("abc", 123);
// console.log(fruname);

//function declaration
// function calcAge(birthYear) {
//   return 2025 - birthYear;
// }

// console.log(calcAge(2004));

//function expression
// const func = function () {
//   console.log("this is annony.. function");
// };
// const callfunc = func();
// console.log(callfunc);

//Arrow Function

// const Arrow = () => {
//   console.log("hello");
// };

// const arrowPrint = Arrow();
// console.log(arrowPrint);

// \\Functions Calling Other Functions// \\

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruiteprocessor(apples, orange) {
//   const applePieces = cutFruitPieces(apples);
//   const orangepieces = cutFruitPieces(orange);
//   const juice = `juice with ${applePieces} apple pieces and ${orangepieces} orange pieces `;
//   return juice;
// }

// console.log(fruiteprocessor(2, 3));

//arrays

// const nums = [1, 2, 3, 4, 5];

// console.log(nums);

// const nums1 = new Array("1", "2", "3", "4");

// console.log(nums[0]);

// console.log(nums.length);
// console.log(nums[nums.length - 1]);

// nums[2] = 3;
// console.log(nums);

//add in last
// const nums = [1, 2, 3, 4, 5];
// nums.push(6);
// console.log(nums);

// //for Add in begining
// nums.unshift(0);
// console.log(nums);

// //remove last element
// nums.pop();
// console.log(nums);

// //removes first element
// nums.shift();
// console.log(nums);

// console.log(nums.indexOf(2));
// console.log(nums.includes(0));

//objects

// const array = ["kirtan", "agravat", 2020 - 1010, "student", [1, 2, 3]];
// console.log(array);

const obj = {
  firstName: "kirtan",
  lastName: "agravat",
  age: 19,
  nums: ["1", 2, 3, 5],
};

//two ways to take values from the object\

//1) dot
// console.log(obj.age);
// //2) brackets
// console.log(obj["firstName"]);

// const nameKey = "Name";
// console.log(obj["first" + nameKey]);

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"
// console.log(
//   `${obj.firstName} has ${obj.nums.length} friends, and his best friend is called ${obj.nums[0]}`
// );

//loops
//for loop keeps running while condition is TRUE
for (let i = 0; i < 5; i++) {
  // console.log(i);
}

// Looping Arrays, Breaking and Continuing

const array = ["kirtan", "Agravat", 2020 - 1010, "student", [1, 2, 3]];
// const types = [];
// for (let i = 0; i < array.length; i++) {
//   //   console.log(i, array[i], typeof array[i]);
// //   types.push(typeof array[i]);
// }

//continue and break



// for (let index = 0; index < array.length; index++) {
//     if (typeof array[index] !== 'string') {
//         continue;
//     }
//     // console.log(array[index]);
// }


