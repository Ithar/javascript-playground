// Partitioning begins by locating two position markers and using a pivot to sort

/*
*                   [(5),2,1,8,4,7,6,3]
*                   [3,2,1,4,(5)|,7,6,8]
*                   [1,2,(3),4,5,|7,6,8]
*                   [(1),2,3,4,5,|7,6,8]
*                   [(1),2,3,4,5,|7,6,8]
*                   [(1),2,3,4,5,|(7),6,8]
*                   [(1),2,3,4,5,|6,7,8]
 */

function pivot(arr, start = 0, end = arr.length - 1) {

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function quickSort(arr, left = 0, right = arr.length -1){

    if(left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr,left,pivotIndex-1); //left
        quickSort(arr,pivotIndex+1,right); //right
    }

    return arr;
}

quickSort([8,3,5,4,7,6,1,2]);