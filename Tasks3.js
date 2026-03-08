/*• Create an array of student objects with properties:
let students = [
{ name: 'Alice', age: 22, scores: [78, 85, 92] },
{ name: 'Bob', age: 20, scores: [88, 90, 76] },
{ name: 'Charlie', age: 21, scores: [95, 80, 85] }
];
• Write a function that:
- Calculates the average score of each student.
- Finds the student with the highest average score.
- Logs: “Top Student: [Name] with an average score of
[score]”.*/


let students = [
 { name: "Alice", age: 22, scores: [78,85,92] },
 { name: "Bob", age: 20, scores: [88,90,76] },
 { name: "Charlie", age: 21, scores: [95,80,85] }
];

let highestAverage = 0;
let topStudent = "";

for (let i = 0; i < students.length; i++) {

    let total = 0;

    for (let j = 0; j < students[i].scores.length; j++) {
        total = total + students[i].scores[j];
    }

    let average = total / students[i].scores.length;

    console.log(students[i].name + " average score is " + average);

    if (average > highestAverage) {
        highestAverage = average;
        topStudent = students[i].name;
    }
}

console.log("Top Student: " + topStudent + " with an average score of " + highestAverage);