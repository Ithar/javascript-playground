// Exploits properties of numbers to place numbers in buckets from left to right

/*
*                   [170, 45, 75, 90, 2, 802, 2, 66]
*               [{170, 90} | {2, 802, 2} | {45, 75} | {66}]
*               [{02, 802, 02} | {45} | {66} | {170, 75} | {90}]
*               [{002, 002, 045, 066, 075, 090} |  {170} | {802}]
*                   [2, 2, 45, 66, 75, 90, 170, 802]
* */

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([170, 45, 75, 90, 2, 802, 2, 66]);