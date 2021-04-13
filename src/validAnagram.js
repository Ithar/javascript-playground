// Problem: Given two input strings determine if they are an anagram.

 /*
validAnagram('', '');                          // true
validAnagram('acb', 'abc');                     // true
validAnagram('aaz', 'zaz');                     // false
validAnagram('awesome', 'awesom');              // false
validAnagram('qwerty', 'ytrewq');               // true
validAnagram('texttwisttime', 'timetwisttext'); // true
*/

// ###################################
// Solution 1: Nested Loops O(n^2)
// ###################################
function validAnagram1(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let arr1 = str1.split('');
    let arr2 = str2.split('');

    for (let i=0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]); // performs like a nested loop

        if (index === -1) {
            return false;
        }

        arr2.splice(index, 1);
    }

    return true;
}

// ###################################
// Solution 2: None-nested loops counter O(n)
// ###################################
function validAnagram2(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let arr1 = str1.split('');
    let arr2 = str2.split('');

    let charCounter1 = {};
    for (let val of arr1) {
        charCounter1[val] = (charCounter1[val] || 0) + 1;
    }

    let charCounter2 = {};
    for (let val of arr2) {
        charCounter2[val] = (charCounter2[val] || 0) + 1;
    }

    for (let key of Object.keys(charCounter1)) {

        if (!(key in charCounter2)) {
            return false;
        }

        if (charCounter1[key] !== charCounter2[key]) {
            return false;
        }
    }
    return true;
}

// ###################################
// Solution 3: None-nested loops lookup O(n)
// ###################################
function validAnagram3(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let arr1 = str1.split('');
    let arr2 = str2.split('');

    let lookupCounter = {};
    for (let val of arr1) {
        lookupCounter[val] = (lookupCounter[val] || 0) + 1;
    }

    for (let val of arr2) {

        if (!lookupCounter[val] || lookupCounter[val] < 0) {
            return false;
        }

        lookupCounter[val] -= 1;
    }
    return true;
}
