// // Coding Challege - 1

// const calcAvg = (n1, n2, n3) => {
//   let avg = (n1 + n2 + n3) / 3;
//   // console.log(avg);
// };

// const avgOfDolphins = calcAvg(44, 23, 71);
// const avgOfKoalas = calcAvg(65, 54, 49);

// function checkWinner(avgOfDolphins, avgOfKoalas) {
//   if (avgOfDolphins >= 2 * avgOfKoalas) {
//     // console.log("dolphins wins");
//   } else if (avgOfKoalas >= 2 * avgOfDolphins) {
//     // console.log("koalas wins");
//   } else {
//     // console.log("no one wins");
//   }
// }

// checkWinner(avgOfDolphins,avgOfKoalas)

// // Coding Challenge - 2

// function calcTip(bills) {
//   if (bills <= 300 && bills >= 50) {
//     return bills * 0.15;
//   } else {
//     return bills * 0.2;
//   }
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// // console.log(bills,tips,total);

// //coding challenge - 3

// const markData = {
//   fullName: "Mark Miller",
//   weight: 78,
//   Height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.weight / this.Height ** 2;
//     return this.BMI;
//   },
// };

// const johnData = {
//   fullName: "John Smith",
//   weight: 92,
//   Height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.weight / this.Height ** 2;
//     return this.BMI;
//   },
// };
// johnData.calcBMI();
// markData.calcBMI();

// if (markData.BMI > johnData.BMI) {
//   // console.log(
//   //   `${markData.fullName}'s BMI (${markData.BMI}) is higher than ${johnData.fullName}'s (${johnData.BMI})`
//   // );
// } else {
//   // console.log(
//   //   `${johnData.fullName}'s BMI (${johnData.BMI}) is higher than ${markData.fullName}'s (${markData.BMI})`
//   // );
// }

//coding challenge-4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const totals = [];
const tips = [];

const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const t = calcTip(bills[i]);
  tips.push(t);
  totals.push(t + bills[i]);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
