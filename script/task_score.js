//Баллы за каждое задание
let introductionScore = 50;
let gitScore = 100;
let jsScore = 150;

//расчет среднего значения
let averageScore = (introductionScore + gitScore + jsScore) / 3;

//Студент
let firstName = "Victor";
let lastName = "Marasinskiy";

//1 буква в имени
let first_letter = firstName.slice(0,1);
console.log(first_letter + "." + lastName);


console.log("Студент: " + firstName + " " + lastName);
console.log("Баллы по модулю Introduction: " + introductionScore);
console.log("Баллы по модулю Git: " + gitScore);
console.log("Баллы по модулю JavaScript: " + jsScore);
console.log("Средний балл: " + averageScore);