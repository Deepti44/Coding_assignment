/*Write a function that takes two arrays and returns a new
array with only the unique elements from both.*/

function getUnique(arr1, arr2) {

    let result = [];

    let combined = arr1.concat(arr2);

    for (let i = 0; i < combined.length; i++) {

        let count = 0;

        for (let j = 0; j < combined.length; j++) {
            if (combined[i] == combined[j]) {
                count++;
            }
        }

        if (count == 1) {
            result.push(combined[i]);
        }

    }

    return result;
}

let a = [1,2,3,4];
let b = [3,4,5,6];

console.log(getUnique(a,b));