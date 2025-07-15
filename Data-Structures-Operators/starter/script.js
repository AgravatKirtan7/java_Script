'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will delivered to ${address} and ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// restaurant.orderDelivery({
//   time: `22:30`,
//   address: `via del sole, 21 `,
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: `via del sole, 21 `,
//   starterIndex: 1,
// });

// const arr = [2, 3, 4];
// const a = [1];

// const [x, y, z] = arr;

//console.log(x, y, z);

// let [main, , second] = restaurant.categories;
// console.log(main, second);

// [main, second] = [second, main];
// console.log(main, second);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 3, [5, 9]];

// //Default value
// const [p, q, r] = [8, 9];

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// //nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//spread operation

// const arr = [7, 8, 9, 6];
// const badNewArr = [1, 2, arr[0], arr[1]];
// console.log(badNewArr);

// const NewArr = [1, 2, ...arr];

// console.log(NewArr);

// console.log(...NewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

//join 2 Arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects

// const ingredients = [
//   prompt("let's make pasta ! Ingredient 1 ?"),
//   prompt(' Ingredient 2 ?'),
//   prompt(' Ingredient 3 ?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

/// --------------------------------Rest Operator ----------------------------- \\\

//spread , because on right side of =

// const arr = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(a, b, others);
// console.log('---------OR-----------');

// console.log(3 || 'kirtan');
// console.log('' || 'kirtan');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hi' || 23 || null);

// console.log('--------AND---------');

// console.log(0 && 'kirtan');

// restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//logic Assignment

const rest1 = {
  name: 'capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: `la piazza`,
  owner: `me`,
};

//OR assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// for (const [i, el] of menu.entries()) {
// console.log(i + 1, el);
// }

// console.log(restaurant.openingHours.mon);
//WIth Optional Chaining

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

//Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'null';
  // console.log(`${day} ${open}`);
}

for (const day of Object.keys(restaurant.openingHours)) {
  // console.log(day);
}

//sets

const orderSet = new Set(['pasta', 'pizza', 'pizza', 'risotto', 'pasta']);

// console.log(orderSet);
// console.log(orderSet.size);

// console.log(orderSet.has('pizza'));
orderSet.add('Garlic Bread');
// console.log(orderSet);

//Maps

const rest = new Map();
rest.set('name', 'something');
rest.set(2, 'other');
rest.set(3, 'nothing');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
// console.log(rest);

rest.get(2);
let time1 = 8;
// console.log(rest.get(time1 > rest.get('open') && time1 < rest.get('close')));

//Strings

const airline = 'air Line';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);

const checkMiddleSeat = function (seat) {
  const lastElement = seat.slice(-1);

  if (lastElement === 'B' || lastElement === 'E') {
    console.log('you got middle sit');
  } else {
    console.log('this time you are lucky ');
  }
};
checkMiddleSeat('11B');

const str = 'kIrTan Agravat';
const strLower = str.toLowerCase();
const finalStr = str[0].toUpperCase() + strLower.slice(1);
console.log(finalStr);

console.log(str.split(' '));

// console.log(str.replaceAll('a', '@'));
/*
String  methods so far
include()
replaceAll()
replace()
toLowerCase()
toUpperCase()
slice()
has()
include()
startsWith()
endsWith()
split()
etc ...
*/

// ---===========---------  Coding Challenge #1 ----====================

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [player1, player2] = game.players;
// console.log(player1, player2);

//2.
const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

//3.
const allPlayers = [...player1, ...player2];

// console.log(allPlayers);

//4.

const p1 = [...player1, 'thiago', 'coutinho', 'perisic'];
// console.log(p1);

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;

//6.
function printGoals(...players) {
  console.log(players);
  console.log(`${players.length} goal scored  `);
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

//7.

// team1 < team2 && console.log('team1 is more likely to win');
// team1 > team2 && console.log('team2 is more likely to win');

// [=============-------------------- Coding Challenge #2 -------------=====================]

//1.
for (const [i, player] of game.scored.entries()) {
  // console.log(`Goal ${i} : from ${player}`);
}

//2.
const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
  average += odd;
}

average /= odds.length;

// console.log(average);

//3.

for (const [team, odd] of Object.entries(game.odds)) {
  const teamstr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  // console.log(teamstr, odd);
}

//-----------------==========================Coding Challenge #3------------------===================\\

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
// console.log(events);

//2.
gameEvents.delete(64);

// console.log(...gameEvents);

const time = [...gameEvents.keys()].pop();
// console.log(`${time / gameEvents.size}`);

//4.

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'first half : ' : 'second half : ';
  // console.log(`${half} : ${min}th min => ${event}`);
}

//------------======================= Coding Challenge #4 ===============----------------\\

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )} `;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
