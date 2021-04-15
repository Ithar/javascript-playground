// Compares adjacent elements and swaps them if they are in the wrong order.
// Optimised bubble sort; check no swaps and breaks to prevent unnecessary iterations
/*
 [ 8, 1, 5, 3, 4, 5, 6, 7 ]
 [ 1, 8, 5, 3, 4, 5, 6, 7 ]
 [ 1, 5, 8, 3, 4, 5, 6, 7 ]
 [ 1, 5, 3, 8, 4, 5, 6, 7 ]
 [ 1, 5, 3, 4, 8, 5, 6, 7 ]
 [ 1, 5, 3, 4, 5, 8, 6, 7 ]
 [ 1, 5, 3, 4, 5, 6, 8, 7 ]
 [ 1, 5, 3, 4, 5, 6, 7, 8 ]
 [ 1, 5, 3, 4, 5, 6, 7, 8 ]
 [ 1, 3, 5, 4, 5, 6, 7, 8 ]
 [ 1, 3, 4, 5, 5, 6, 7, 8 ]
 [ 1, 3, 4, 5, 5, 6, 7, 8 ]
 [ 1, 3, 4, 5, 5, 6, 7, 8 ]
 [ 1, 3, 4, 5, 5, 6, 7, 8 ]
 [ 1, 3, 4, 5, 5, 6, 7, 8 ]
 [ 1, 3, 4, 5, 5, 6, 7, 8 ]
 [ 1, 3, 4, 5, 5, 6, 7, 8 ]
 [ 1, 3, 4, 5, 5, 6, 7, 8 ]
 [ 1, 3, 4, 5, 5, 6, 7, 8 ]
*/

function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
               swap(arr, j);
               noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

function swap(arr, j) {
    let temp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = temp;
}

bubbleSort([8,1,5,3,4,5,6,7]);
