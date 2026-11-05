// 1. Create Student Class
class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // Calculate average using reduce
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    // Calculate student grade
    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // Check final result
    getResult(average) {
        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// 2. Create Students Objects
let studentsList = [
    new Student(101, "Ahmed", [90, 85, 95], 90),
    new Student(102, "Mona", [45, 48, 46], 85),
    new Student(103, "Omar", [40, 44, 45], 80),
    new Student(104, "Sara", [65, 70, 68], 70)
];

// 3. Print Report for All Students
console.log("===== Students Results =====");

studentsList.forEach(student => {
    let average = student.calculateAverage();

    console.log({
        Name: student.name,
        Average: average.toFixed(2),
        Grade: student.getGrade(average),
        Result: student.getResult(average)
    });
});

// 4. Filter Students Who Need Mercy Marks
let strugglingStudents = studentsList.filter(student => {
    let average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

// 5. Add 5 Mercy Marks Using map
let mercyStudents = strugglingStudents.map(student => {
    let oldAverage = student.calculateAverage();

    return {
        id: student.id,
        name: student.name,
        oldAverage: oldAverage,
        newAverage: oldAverage + 5
    };
});

// 6. Calculate Total New Averages Using reduce
let totalAfterMercy = mercyStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

// 7. Calculate General Mercy Average
let mercyAverage = mercyStudents.length > 0
    ? totalAfterMercy / mercyStudents.length
    : 0;

// 8. Print Mercy Committee Report
console.log("===== Mercy Committee Students =====");
console.log(mercyStudents);

console.log("===== Average After Mercy Marks =====");
console.log(mercyAverage.toFixed(2));
