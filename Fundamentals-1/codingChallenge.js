// //coding-challenge-1
// let mark_mass = 78;
// let mark_height = 1.69;
// let mark_BMI = mark_mass / (mark_height * mark_height);
// // console.log(mark_BMI);

// let john_mass = 92;
// let john_height = 1.95;
// let john_BMI = john_mass / (john_height * john_height);
// // console.log(john_BMI);

// let markHigherBMI = mark_BMI > john_BMI;
// console.log(markHigherBMI);

// //coding-challenge-2

// if (john_BMI < mark_BMI) {
//   console.log(
//     `mark's BMI which is ${mark_BMI} higher than john's BMI which is ${john_BMI}`
//   );
// } else {
//   console.log(
//     `john'BMI which is ${john_BMI} higher than mark's BMI which is ${mark_BMI}`
//   );
// }

// coding-challenge-3

// let ScoreDolphins = (6 + 45 + 9) / 3;
// let ScoreKoalas = (6 + 45 + 9) / 3;

// option 1
// const minScore = 100;
// const scoreCheck = sumScoreDolphins > minScore && sumScoreKoalas > minScore;
// if (scoreCheck && avgScoreOfDolphins === avgScoreOfKoalas) {
//   console.log("draw");
// } else if (scoreCheck && avgScoreOfDolphins > avgScoreOfKoalas) {
//   console.log("dolphins are winner");
// } else if (scoreCheck && avgScoreOfKoalas > avgScoreOfDolphins) {
//   console.log("Koalas are winner");
// } else {
//   console.log("no winner");
// }

// option-2
// if (ScoreDolphins > ScoreKoalas && ScoreDolphins >= 100) {
//   console.log("dolpins win");
// } else if (ScoreKoalas > ScoreDolphins && ScoreKoalas >= 100) {
//   console.log("koalas wins");
// } else if (
//   ScoreDolphins === ScoreKoalas &&
//   ScoreDolphins >= 100 &&
//   ScoreKoalas >= 100
// ) {
//   console.log("draw");
// } else {
//   console.log("no winners");
// }

// coding-challenge - 4

let bill = 275;

const finalBill = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(finalBill + bill);
