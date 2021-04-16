// An in-place comparison where sub-list is always sorted
/*
[ 1, 8, 5, 3, 4, 5, 6, 7 ]
[ 1, 5, 8, 3, 4, 5, 6, 7 ]
[ 1, 3, 5, 8, 4, 5, 6, 7 ]
[ 1, 3, 4, 5, 8, 5, 6, 7 ]
[ 1, 3, 4, 5, 5, 8, 6, 7 ]
[ 1, 3, 4, 5, 5, 6, 8, 7 ]
[ 1, 3, 4, 5, 5, 6, 7, 8 ]
[ 1, 3, 4, 5, 5, 6, 7, 8 ]
*/

function insertionSort(arr){
    let  currentVal;
    for(let i=1; i < arr.length; i++) {
        currentVal = arr[i];
        for(var j=i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }

        arr[j+1] = currentVal;
        console.log(arr);
    }
    return arr;
}

insertionSort([8,1,5,3,4,5,6,7]);
