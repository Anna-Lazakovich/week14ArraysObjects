//1
let grades = new Array(12);
grades = grades.fill().map(() => Math.round(Math.random() * 100)).sort((a, b) => a - b);
console.log(grades);

//2
let getAverage = (grades) => {
    let sum = grades.reduce((a, b) => a + b, 0);
    let length = grades.length;
    return Math.round(sum / length);
};
console.log(`Средний балл студентов: ${getAverage(grades)}`);

//3
const maxGrade = Math.max(...grades);
console.log(`Максимальный балл студентов: ${maxGrade}`);
//3 (второй вариант)
const maxGrade1 = grades.sort((a, b) => b - a)[0];
console.log(`Максимальный балл студентов: ${maxGrade1}`);

//4
const minGrade = Math.min(...grades);
console.log(`Минимальный балл студентов: ${minGrade}`);
//4 (второй вариант)
const minGrade1 = grades.sort((a, b) => a - b)[0];
console.log(`Минимальный балл студентов: ${minGrade1}`);

//5
const positiveGrades = grades.filter(el=>el >=60);
const otherGrades = grades.filter(el=>el <60);
console.log(`Положительные оценки (>=60 баллов) получили ${positiveGrades.length} студентов, у ${otherGrades.length} студентов балл ниже 60.`);

//6
const negativeGrades = grades.filter(el=>el <60);
console.log(`Отрицательные оценки (<60 баллов) получили ${negativeGrades.length} студентов.`);

//7
//const gradesLetter (el) => {
//    let resultGrade = "";
//    if (el >= 80) {
//        resultGrade = 'A';
//    } else if {
//        (el >= 60 && el <=79)
//        resultGrade = 'B';
//    } else if {
//        (el >= 40 && el <=59)
//        resultGrade = 'C';
//    } else if {
//        (el >= 20 && el <=39)
//        resultGrade = 'D';
//    } else {
//        resultGrade = 'E';
//};
//};
//console.log();
