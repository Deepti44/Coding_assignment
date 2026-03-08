# JavaScript Coding and Timer Challenge

This project contains solutions for four JavaScript tasks based on basic programming concepts such as arrays, loops, objects, and DOM manipulation.

The project is implemented using **HTML, CSS, and JavaScript**.

---

## Task 1: Find the Second Largest Number

### Problem
Given an array of numbers:

[23, 45, 67, 89, 12, 90, 44]

Find the **second largest number** in the array **without sorting the array**.

### Approach
1. Create two variables: `largest` and `secondLargest`.
2. Traverse the array using a loop.
3. Update the values when a larger number is found.
4. Print the second largest number using `console.log()`.

### Output Example
Second Largest Number: 89

---

## Task 2: Return Unique Elements from Two Arrays

### Problem
Write a function that takes **two arrays** and returns a new array containing **only unique elements** from both arrays.

### Approach
1. Combine both arrays using `concat()`.
2. Loop through the combined array.
3. Count how many times each element appears.
4. If the count is `1`, push the element into a new array.
5. Return the unique elements array.

### Example

Input:

Array 1 → [1,2,3,4]  
Array 2 → [3,4,5,6]

Output:

[1,2,5,6]

---

## Task 3: Student Score Analysis

### Problem
Create an array of student objects:
let students = [
{ name: 'Alice', age: 22, scores: [78,85,92] },
{ name: 'Bob', age: 20, scores: [88,90,76] },
{ name: 'Charlie', age: 21, scores: [95,80,85] }
];


### Requirements
- Calculate the **average score of each student**
- Find the **student with the highest average score**
- Display the result in the console

### Approach
1. Loop through the student array.
2. Calculate the total of scores for each student.
3. Find the average score.
4. Compare averages to find the top student.

### Example Output
Alice average score: 85  
Bob average score: 84.6  
Charlie average score: 86.6  

Top Student: Charlie with an average score of 86.6

---

## Task 4: Countdown Timer

### Problem
Create a **1-hour countdown timer** using **HTML, CSS, and JavaScript**.

### Features
- Timer displayed in **MM:SS format**
- **Start button** to begin the countdown
- **Pause button** to stop the timer
- **Reset button** to restart the timer
- Prevents **negative countdown**
- Shows a **message when the timer ends**

### Technologies Used
- HTML (Structure)
- CSS (Monochrome UI Styling)
- JavaScript (Timer Logic)

### UI Theme
The timer uses a **minimal monochrome design** with:
- Black background
- Grey container
- White timer display
- Styled buttons

---

## Project Structure
tasks
│
├── index.html
├── style.css
├── script.js
└── README.md

## How to Run the Project

### For Task 1–3
Run the JavaScript file using Node.js:
node script.js


### For Task 4
1. Open `index.html` in a browser  
OR  
2. Use **Live Server extension in VS Code**

---

## Concepts Used

- Arrays
- Loops
- Functions
- Objects
- DOM Manipulation
- Event Handling
- Basic UI Styling

---

## Author
 Deepti  

