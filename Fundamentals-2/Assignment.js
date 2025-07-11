//Assignment - 1
// LECTURE: Functions

function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}

const country1 = describeCountry("india", 100, "delhi");
const country2 = describeCountry("nepal", 10, "katmandu");
const country3 = describeCountry("sri lanka ", 100, "ri Jayawardenepura Kotte");

console.log(country1);
console.log(country2);
console.log(country3);

//Assignment - 2
// LECTURE: Function Declarations vs. Expressions

function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2);
}

percentageOfWorld1(1000);
percentageOfWorld1(5000);
percentageOfWorld1(1200);

const percentageOfWorld2 = function (population) {
  console.log((population / 7900) * 100);
};

percentageOfWorld2(1441);
percentageOfWorld2(1551);
percentageOfWorld2(1212);

// Assignment - 3
// LECTURE: Arrow Functions

const percentageOfWorld3 = (population) => {
  console.log((population / 7900) * 100);
};

percentageOfWorld3(1212);
percentageOfWorld3(121);
percentageOfWorld3(1200);

//Assignment - 4
// LECTURE: Functions Calling Other Functions

function describePopulation(country, population) {
  console.log(
    `${country} has ${population} million people which is about ${percentageOfWorld1(
      population
    )}% of the world`
  );
}

describePopulation("india", 1002);

//Assignment - 5
//LECTURE: Introduction to Arrays

const populations = [1463, 1416, 347, 285];

// India (1463 million), China (1416 million), United States (347 million), and Indonesia (285 million)

console.log(populations.length == 4);

const percentage = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentage);

//Assignment - 6
//LECTURE: Basic Array Operations (Methods)

const neighbours = ["india", "china", "nepal", "pakistan"];

neighbours.push("Utopia");

neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

let i = neighbours.indexOf("pakistan");
if (i !== -1) {
  neighbours[i] = "bangladesh";
}
console.log("After renaming", neighbours);

//Assignment - 7
//LECTURE: Introduction to Objects

let myCountry = {
  country: "india",
  capital: "delhi",
  language: "hindi",
  population: 1463,
  neighbours: ["bhutan", "china", "nepal", "pakistan"],
};

console.log(myCountry);

//Assignment - 8
//LECTURE: Dot vs. Bracket Notation

console.log(
  `${myCountry.country} has ${myCountry.population} millions ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population -= 2;

// console.log(myCountry);

myCountry["population"] += 2;

// console.log(myCountry);

//assignment - 9
//LECTURE: Object Methods

myCountry.describe = function () {
  return `${this.country} has ${this.population} millions ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
};
// console.log(myCountry.describe());

myCountry.checkIsland = function () {
  this.isIsland = neighbours.length === 0 ? true : false;
};

//Assignment - 10
//LECTURE: Iteration: The for Loop

for (let i = 1; i <= 50; i++) {
  console.log("Voter number " + i + " is currently voting");
}

//Assignment - 11
//LECTURE: Looping Arrays, Breaking and Continuing

const percentage2 = [];

for (let i = 0; i < populations.length; i++) {
  percentage2[i] = percentageOfWorld1([populations[i]]);
}

console.log(percentage2);

//Assignment - 12
//LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour : ${listOfNeighbours[i][j]}`);
  }
}

//Assignment-13
//LECTURE: The while Loop

const percentage3 = [];
let index = 0;
while (index < populations.length) {
  percentage3[index] = percentageOfWorld1([populations[index]]);
  index++;
}
console.log(percentage3);
