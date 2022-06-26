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

let marksFunction = marks => {
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
let greatPoint = marks => {
  let great;
  if (marks >= 0 && marks <= 32) {
    great = 'F';
  } else if (marks >= 33 && marks < 40) {
    great = 'D';
  } else if (marks >= 41 && marks < 50) {
    great = 'C';
  } else if (marks >= 51 && marks < 60) {
    great = 'B';
  } else if (marks >= 61 && marks < 70) {
    great = 'A-';
  } else if (marks >= 71 && marks < 80) {
    great = 'A';
  } else if (marks >= 81 && marks <= 100) {
    great = 'A+';
  }
  return great;
};
let cgpa = (ban, eng, math, s, rel, ss) => {
  let totalGpa =
    marksFunction(inputBangla.value) +
    marksFunction(inputEnglish.value) +
    marksFunction(inputMath.value) +
    marksFunction(inputScience.value) +
    marksFunction(inputReligion.value) +
    marksFunction(inputSocialScience.value);

  totalGpa = (totalGpa / 6).toFixed(2);
  if (
    marksFunction(inputBangla.value) == 0 ||
    marksFunction(inputEnglish.value) == 0 ||
    marksFunction(inputMath.value) == 0 ||
    marksFunction(inputScience.value) == 0 ||
    marksFunction(inputReligion.value) == 0 ||
    marksFunction(inputSocialScience.value) == 0
  ) {
    return `Your Result : F`;
  } else {
    return `Your Result : ${totalGpa}`;
  }
};

submitBtn.addEventListener('click', () => {
  tab_roll.innerHTML = inputRoll.value;
  (tab_mark_bangla.innerHTML = inputBangla.value),
    (tab_mark_english.innerHTML = inputEnglish.value),
    (tab_mark_math.innerHTML = inputMath.value),
    (tab_mark_science.innerHTML = inputScience.value),
    (tab_mark_religion.innerHTML = inputReligion.value),
    (tab_mark_sscience.innerHTML = inputSocialScience.value);
  inputBangla.classList.remove('border', 'border-danger');
  if (inputName.value === '') {
    inputName.classList.add('border', 'border-danger');
  } else {
    tab_name.innerHTML = inputName.value;
  }
  if (inputRoll.value === '') {
    inputRoll.classList.add('border', 'border-danger');
  } else {
    tab_roll.innerHTML = inputRoll.value;
  }
  if (inputBangla.value === '') {
    inputBangla.classList.add('border', 'border-danger');
  } else {
    tab_gpa_bangla.innerHTML = marksFunction(inputBangla.value);
    tab_grate_bangla.innerHTML = greatPoint(inputBangla.value);
    total_cgpa.innerHTML = cgpa();
  }
  if (inputEnglish.value === '') {
    inputEnglish.classList.add('border', 'border-danger');
  } else {
    tab_gpa_english.innerHTML = marksFunction(inputEnglish.value);
    tab_grate_english.innerHTML = greatPoint(inputEnglish.value);
    total_cgpa.innerHTML = cgpa();
  }
  if (inputMath.value === '') {
    inputMath.classList.add('border', 'border-danger');
  } else {
    tab_gpa_math.innerHTML = marksFunction(inputMath.value);
    tab_great_math.innerHTML = greatPoint(inputMath.value);
    total_cgpa.innerHTML = cgpa();
  }
  if (inputScience.value === '') {
    inputScience.classList.add('border', 'border-danger');
  } else {
    tab_gpa_science.innerHTML = marksFunction(inputScience.value);
    tab_great_science.innerHTML = greatPoint(inputScience.value);
    total_cgpa.innerHTML = cgpa();
  }
  if (inputReligion.value === '') {
    inputReligion.classList.add('border', 'border-danger');
  } else {
    tab_gpa_religion.innerHTML = marksFunction(inputReligion.value);
    tab_great_religion.innerHTML = greatPoint(inputReligion.value);
    total_cgpa.innerHTML = cgpa();
  }
  if (inputSocialScience.value === '') {
    inputSocialScience.classList.add('border', 'border-danger');
  } else {
    tab_gpa_sscience.innerHTML = marksFunction(inputSocialScience.value);
    tab_great_sscience.innerHTML = greatPoint(inputSocialScience.value);
    total_cgpa.innerHTML = cgpa();
  }

  // console.log(marksFunction);
});
