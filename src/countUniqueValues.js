// PROBLEM: Given a sorted array of numbers; count the unique values .

 /*
[1,2,2,3]               // 3
[-1,-1,4,6,6]           // 3
[1,2,3,3,5,5,6,7,7]     // 6
*/

// ###################################
// Solution 1: Nested Loops O(n^2)
// ###################################
function uniqueCounter(arr) {
    let i = 0;
    for (let j=1; j < arr.length; j++) {

        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }

    return i +1;
}

