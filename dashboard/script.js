const students = [
    {
        name: "Asha",
        maths: 85,
        science: 90,
        english: 88
    },
    {
        name: "Ravi",
        maths: 35,
        science: 65,
        english: 70
    },
    {
        name: "Meena",
        maths: 95,
        science: 92,
        english: 90
    },
    {
        name: "Karthik",
        maths: 60,
        science: 55,
        english: 70
    },
    {
        name: "Priya",
        maths: 45,
        science: 80,
        english: 75
    },
    {
        name: "Arun",
        maths: 30,
        science: 35,
        english: 45
    }
];
const total = s =>
    s.maths + s.science + s.english;

const average = s =>
    Number((total(s) / 3).toFixed(2));

const grade = avg =>
    avg >= 90 ? "A" :
    avg >= 75 ? "B" :
    avg >= 60 ? "C" :
    avg >= 40 ? "D" : "F";
//test
console.log(total(students[0]));
console.log(average(students[0]));
console.log(grade(average(students[0])));
//map()
const report = students.map(s => ({
    name: s.name,
    total: total(s),
    average: average(s),
    grade: grade(average(s))
}));

console.table(report);
