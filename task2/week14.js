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
function toLetterGrade(grades) {
    var textGrade = '';
    var result = [];
    for (i = 0; i < grades.length; i++) {
      textG = '';
      if (grades[i] >= 80) {
        textGrade = "A";
      } else if (grades[i] >= 60) {
        textGrade = "B";
      } else if (grades[i] >= 40) {
        textGrade = "C";
      } else if (grades[i] >= 20) {
        textGrade = "D";
      } else {
        textGrade = "E";
      };
      result.push(textGrade);
    }
    return result;
  };
console.log(toLetterGrade(grades));