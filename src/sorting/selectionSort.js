// Finds the minimum element placing it at the beginning.
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
*/

function selectionSort(arr){

    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            swap(arr, i);
        }
    }
    return arr;
}

function swap(arr, j) {
    let temp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = temp;
}

selectionSort([8,1,5,3,4,5,6,7]);
