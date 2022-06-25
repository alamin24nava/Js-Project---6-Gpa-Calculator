'use strict';
// // JavaScript Data Type

// let name = "alamin";
// let age = 24;
// let job = "Dev";
// let status = false;
// let poss = null;
// let role = console.log(typeof name);
// console.log(typeof age);
// console.log(typeof job);
// console.log(typeof status);
// console.log(typeof role);
// console.log(typeof poss);

// if (status !== true) {
//   console.log("yess.....");
// } else {
//   console.log("No");
// }

// let year;
// console.log(year);
// year = 1997;
// console.log(typeof year, year);

// //Basic Operators

// // + - * % / -- ++

// // < > =< => == === !== !===

// let firstNumber = 50;
// let lastNumber = 25;
// let totalNumber = `Total Number is ${(firstNumber -= lastNumber)}`;
// console.log(totalNumber);

// console.log(age);

// if (status !== true) {
//   console.log("Yes Working..");
// } else {
//   console.log("Not Working....");
// }

// if (firstNumber <= 51) {
//   console.log("Yes Working..");
// } else {
//   console.log("Not Working....");
// }
// let cal = 50 - 70 + 4;
// console.log(cal);
// let num1 = "50";
// let num2 = 50;
// num1 = Number(num1);
// let num = num1 + num2;
// console.log(num);

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �

// let markHigherBMI = 1.69;
// let markWeightBMI = 78;

// let johnHigherBMI = 1.95;
// let johnWeightBMI = 92;

// let markBmi = markWeightBMI / markHigherBMI ** 2;
// let johnBmi = johnWeightBMI / johnHigherBMI ** 2;

// console.log(markBmi, johnBmi);

// 12. Strings and Template Literals
// let firstName = 'alamin';
// let lastName = 'sheikh';
// let job = 'Dev';

// console.log(`I'm ${firstName} ${lastName} and my cureent job ${job}`);

// 16. Truthy and Falsy Values

// Falsy Values
// 0 NaN NULL undefined false (empty value)
// let status = true;

// if (status) {
//   console.log(`Hurrre It's Working.....`);
// } else {
//   console.log('Ohhh Not Working....');
// }

// let firstNumber = 40;
// let lastNumber = '40';

// if (firstNumber === lastNumber) {
//   console.log(`Hurrre It's Working.....`);
// } else {
//   console.log('Ohhh Not Working....');
// }

// let ageCal = 18;
// if (ageCal === '18') {
//   console.log(`Hurrre It's Working.....`);
// } else {
//   console.log('Ohhh Not Working....');
// }

// JavaScript Logical Operator

// let ageCal = 24;

// if (ageCal < 25) {
//   console.log(`Hurrre It's Working.....`);
// } else {
//   console.log('Ohhh Not Working....');
// }
// 21. The switch Statement

// const subject = 'Math';

// switch (dateTime) {
//   case '0':
//     console.log(`Yes, It's Bangla`);
//     break;
//   case '1':
//     console.log(`Yes, It's English`);
//     break;
//   case '1':
//     console.log(`Yes, It's Math`);
//        break;
//   default:
//     console.log('Default Result');
// }

// 23. The Conditional (Ternary) Operator

// const age = 65;

// if (age > 18) {
//   console.log(`Yes He's 18+`);
// } else {
//   console.log('No root');
// }

// const resultAge = age >= 0 ? 'True........!' : 'False';
// console.log(`MY result ${resultAge} `);

// const bill = 500;

// let trip = bill > 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// totalBill = bill + trip;
// console.log(
//   `The Bill was ${bill} taka and Trip was ${trip} taka and total bill ${totalBill} tk`
// );
// const bill = 500;
// let trip = bill > 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// totalBill = bill + trip;

// real project restaurants Bill

// let inputBill = document.getElementById('input_bill');
// let resultView = document.getElementById('total_bill');
// let btnTotal = document.getElementById('btn_total');

// let myResult = function (bill, trip, totalbill) {
//   bill = inputBill.value;
//   trip = bill > 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   totalbill = parseInt(Number(bill) + Number(trip));
//   resultView.innerHTML = `Your Total Bill =  ${totalbill}Tk `;
//   return totalbill;
// };

// btnTotal.addEventListener('click', function () {
//   inputBill.classList.remove('border', 'border-danger');
//   if (inputBill.value !== '') {
//     myResult();
//   } else {
//     inputBill.classList.add('border', 'border-danger');
//   }
// });

// Student Result

// let resultFunction = function (
//   bangla,
//   english,
//   math,
//   science,
//   religion,
//   social
// ) {
//   bangla = 50;
//   english = 98;
//   math = 65;
//   science = 58;
//   religion = 96;
//   social = 78;

//   console.log(
//     `your result bangla ${bangla}, english ${english}, math ${math}, science ${science}, religion ${religion} and social ${social}`
//   );
// };
// resultFunction();

// let inputBill = document.getElementById('input_bill');
// let clickBtn = document.getElementById('btn_total');
// let showValue = document.getElementById('total_bill');

// let restaurantsBill = (bill, tip, total) => {
//   bill = inputBill.value;

//   tip = bill > 50 && bill <= 300 ? bill * 0.15 : bill * 0.1;

//   total = parseInt(Number(bill) + Number(tip));
//   showValue.innerHTML = `${total}`;
//   return total;
// };
// clickBtn.addEventListener('click', () => {
//   inputBill.classList.remove('border', 'border-danger');
//   inputBill.value !== ''
//     ? restaurantsBill()
//     : inputBill.classList.add('border', 'border-danger');
// });
// Get Form
// let formName = document.querySelector('#result input');
// all input
let inputName = document.getElementById('s_name').value;
let inputRoll = document.getElementById('s_roll').value;
let inputBangla = document.getElementById('bangla').value;
let inputEnglish = document.getElementById('english').value;
let inputMath = document.getElementById('math').value;
let inputScience = document.getElementById('science').value;
let inputReligion = document.getElementById('religion').value;
let inputSocialScience = document.getElementById('sScience').value;
// Submit Button
let submitBtn = document.getElementById('btn_submit');
// Table Data

// let tabName = document.getElementById('tab_name');
// let tabRoll = document.getElementById('tab_roll');
// let tabSub = document.getElementById('tab_sub');
let tabMark = document.getElementById('tab_mark');
let tabGpa = document.querySelectorAll('.tab_gpa');

// let tabCgpa = document.getElementById('tab_cgpa');

let gpa = marks => {
  let gpa;
  if (marks >= 0 && marks <= 32) {
    gpa = 0;
  } else if (marks >= 33 && marks < 40) {
    gpa = 1;
  } else if (marks >= 41 && marks < 50) {
    gpa = 2;
  } else if (marks >= 51 && marks < 60) {
    gpa = 3;
  } else if (marks >= 61 && marks < 70) {
    gpa = 3.5;
  } else if (marks >= 71 && marks < 80) {
    gpa = 4;
  } else if (marks >= 81 && marks <= 100) {
    gpa = 5;
  }
  return gpa;
};

// let marksFunction = () => {};
submitBtn.addEventListener('click', () => {
  tabGpa.forEach(function (ins) {
    gpa((ins = tabGpa.innerHTML = inputBangla));
  });
  console.log(  tabGpa.forEach(function (ins) {
    gpa((ins = tabGpa.innerHTML = inputBangla));
  }););
});
