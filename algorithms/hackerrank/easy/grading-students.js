//массив оценок должен пройти системой контроля и выдать массив конечных оценок
//условия :If the difference between the grade and the next multiple of 5 is less than 3 ,
// round grade up to the next multiple of 5.
// If the value of grade is less than 40, no rounding occurs as the result will still be a failing grade.


function gradingStudents(grades) {

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > 37 && (Math.ceil(grades[i] / 5) * 5 - grades[i] < 3)) {
            grades[i] = Math.ceil(grades[i] / 5) * 5;
        }
    }
    return grades;
}
