// // let js = "kirtan";
// // if (js === 1) console.log("you are right");

// let firstName = "kirtan";
// console.log(firstName);

// // $ and _ are allowed to start from the variable
// // variable should be in camleCase

// //7 types of data types
// // number string bool undefine null bigint symbol

// //typeof for datatype check

// //let var const

// //use let when value will change otherwise always use const as a datatype
// let age = 15;
// age = 14;

// const birtYear = 2004;
// // birtYear = 2005

// var greetings = "hello";
// greetings = "hiii";

// //basic opration
// // > < => <= -- ++ *+-= == += -= ...

// //String to  number conversion

// const inputYear = "1221";
// console.log(Number(inputYear) + 15);

// //number to String
// console.log(String(23), 23);

// //type coercion

// console.log("i am " + 15 + "years old");
// console.log("23" - "10" - 3);

// //truthy value and falsy value
// // 6 falsy value 0 , '' , undifine , false , null , NaN
// //other than above are truthy value

// console.log(Boolean(0));

// // equality oprations == and ===

// const ageOfMine = "18";
// // const ageOfMine = 18;

// console.log(ageOfMine === 18);
// console.log(ageOfMine == 18);

//promt a number from user
const nums = Number(prompt("enter a number here !!"));
console.log(nums);

//logic operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


//switch statement

const day = 'monday'

switch (day) {
    case 'monday':
        console.log("monday today")
        break;

    default:
        console.log("not  monday today");
        break;
}