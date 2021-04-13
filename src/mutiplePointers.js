// PROBLEM: Given a sorted array of numbers; find which two numbers sum upto zero.

 /*
[-3,-2,-1,1,2,3]        // [-3,3]
[-4,1,2,4,6,9]          // [-4,4]
[-8,-5,-2,-1,2,5,6]     // [-5,5]
[-2,0,1,3]              // false
*/

// ###################################
// Solution 1: Nested Loops O(n^2)
// ###################################
function sumZero1(arr) {

    for (let i=0; i < arr.length; i++) {
        for (let j=i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }

    return false;
}

// ##########################################
// Solution 2: None-nested loops counter O(n)
// ##########################################
function sumZero(arr) {

    let left = 0;
    let right = arr.length -1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left] , arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }

    return false;
}
