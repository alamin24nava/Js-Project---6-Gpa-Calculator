'use strict';
// all input
let inputName = document.getElementById('s_name');
let inputRoll = document.getElementById('s_roll');
let inputBangla = document.getElementById('bangla');
let inputEnglish = document.getElementById('english');
let inputMath = document.getElementById('math');
let inputScience = document.getElementById('science');
let inputReligion = document.getElementById('religion');
let inputSocialScience = document.getElementById('sScience');
// Submit Button
let submitBtn = document.getElementById('btn_submit');

let gpaFunction = marks => {
  let gpa;
  if (marks > 0 && marks < 33) {
    gpa = 0;
  } else if (marks >= 33 && marks < 40) {
    gpa = 1;
  } else if (marks >= 40 && marks < 50) {
    gpa = 2;
  } else if (marks >= 50 && marks < 60) {
    gpa = 3;
  } else if (marks >= 60 && marks < 70) {
    gpa = 3.5;
  } else if (marks >= 70 && marks < 80) {
    gpa = 4;
  } else if (marks >= 80 && marks <= 100) {
    gpa = 5;
  }
  return gpa;
};
let greatFunction = marks => {
  let great;
  if (marks > 0 && marks < 33) {
    great = 'F';
  } else if (marks >= 33 && marks < 40) {
    great = 'D';
  } else if (marks >= 40 && marks < 50) {
    great = 'C';
  } else if (marks >= 50 && marks < 60) {
    great = 'B';
  } else if (marks >= 60 && marks < 70) {
    great = 'A-';
  } else if (marks >= 70 && marks < 80) {
    great = 'A';
  } else if (marks >= 80 && marks <= 100) {
    great = 'A+';
  }
  return great;
};

let cgpaFunction = (ban, eng, math, s, rel, ss) => {
  let totalGpa =
    gpaFunction(inputBangla.value) +
    gpaFunction(inputEnglish.value) +
    gpaFunction(inputMath.value) +
    gpaFunction(inputScience.value) +
    gpaFunction(inputReligion.value) +
    gpaFunction(inputSocialScience.value);
  totalGpa = (totalGpa / 6).toFixed(2);

  if (
    gpaFunction(inputBangla.value) == 0 ||
    gpaFunction(inputEnglish.value) == 0 ||
    gpaFunction(inputMath.value) == 0 ||
    gpaFunction(inputScience.value) == 0 ||
    gpaFunction(inputReligion.value) == 0 ||
    gpaFunction(inputSocialScience.value) == 0
  ) {
    return `Your Result : F`;
  } else {
    return `Your Result : ${totalGpa}`;
  }
};

cgpaFunction();

submitBtn.addEventListener('click', () => {
  tab_name.innerHTML = inputName.value;
  tab_roll.innerHTML = inputRoll.value;
  // all subjects marks
  tab_mark_bangla.innerHTML = inputBangla.value;
  tab_mark_english.innerHTML = inputEnglish.value;
  tab_mark_math.innerHTML = inputMath.value;
  tab_mark_science.innerHTML = inputScience.value;
  tab_mark_religion.innerHTML = inputReligion.value;
  tab_mark_sscience.innerHTML = inputSocialScience.value;
  // all subject  gpa
  tab_gpa_bangla.innerHTML = gpaFunction(inputBangla.value);
  tab_gpa_english.innerHTML = gpaFunction(inputEnglish.value);
  tab_gpa_math.innerHTML = gpaFunction(inputMath.value);
  tab_gpa_science.innerHTML = gpaFunction(inputScience.value);
  tab_gpa_religion.innerHTML = gpaFunction(inputReligion.value);
  tab_gpa_sscience.innerHTML = gpaFunction(inputSocialScience.value);
  // all subject great
  tab_grate_bangla.innerHTML = greatFunction(inputBangla.value);
  tab_grate_english.innerHTML = greatFunction(inputEnglish.value);
  tab_great_math.innerHTML = greatFunction(inputMath.value);
  tab_great_science.innerHTML = greatFunction(inputScience.value);
  tab_great_religion.innerHTML = greatFunction(inputReligion.value);
  tab_great_sscience.innerHTML = greatFunction(inputSocialScience.value);

  total_cgpa.innerHTML = cgpaFunction();
});
