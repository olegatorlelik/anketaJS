let name = prompt("Ваше имя?");
let nameEl = document.getElementById("name");
nameEl.value = name;

let surName = prompt("Ваша фамилия?");
let surNameEl = document.getElementById("surname");
surNameEl.value = surName;

let lastName = prompt("Ваше отчество");
let lastNameEl = document.getElementById("lastname");
lastNameEl.value = lastName;

let age = prompt("Сколько Вам лет?");
let ageEl = document.getElementById("age");
ageEl.value = age;

let genderEl = document.getElementById("gender");

let gender = confirm("ТЫ МУЖИК ИЛИ КТО?");
if (gender == true) genderEl.value = "МУЖИК";

let nextAge = prompt("Сколько мне будет лет через?");
age;
let nextAgeEl = document.getElementById("nextage");
nextAgeEl.value = Number(age) + Number(nextAge);

let daysAgeEl = document.getElementById("daysage");
let daysAge = prompt("Сколько мне лет в днях, если мой возраст?");
daysAgeEl.value = daysAge * 365;
