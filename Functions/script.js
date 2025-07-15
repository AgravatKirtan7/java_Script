"use strict";

//default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  //   console.log(booking);
  bookings.push(booking);
};

// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);

//Passing Arguments by value vs Reference

const flight = "FD12";
const kirtan = {
  name: "kirtan Agravat",
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "Lh999";
  passenger.name = "mr. " + passenger.name;

  if (passenger.passport === 123456789) {
    // alert("checked In")  ;
  } else {
    // alert("wrong ");
  }
};
// checkIn(flight, kirtan);

// Function

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

//Higher order function

const transformer = function (str, fn) {
  //   console.log(`original string ${str}`);
  //   console.log(`transformer String : ${fn(str)}`);
};

// transformer("javaScript is the best", upperFirstWord);

const high5 = function () {
  //   console.log("ψ(｀∇´)ψ");
};

document.body.addEventListener("click", high5);

const greet = function (greet) {
  return function (params) {
    // console.log(`${greet} ${params}`);
  };
};

const greeterHey = greet("hey");
greeterHey("kirtan");

greet("hi")("kirtan");

// The call and apply Methods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    // console.log(
    //   `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    // );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
// console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

// book.call(swiss, 583, "Mary Cooper");

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
// console.log(swiss);

book.call(swiss, ...flightData);

const bookEw = book.bind(eurowings);
// bookEw(23, "hi hello");

lufthansa.planes = 300;

lufthansa.buyplane = function () {
  //   console.log(this);
  this.planes++;
};
// lufthansa.buyplane();

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyplane.bind(lufthansa));

//----------==============coding challenge #1-===================----------------\\

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write Your Answer)`
      )
    );
    console.log(answer);

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResult();
    this.displayResult("string");
  },
  displayResult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`poll result are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 2, 3] }, "string");

//----------==============coding challenge #2-===================----------------\\

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
