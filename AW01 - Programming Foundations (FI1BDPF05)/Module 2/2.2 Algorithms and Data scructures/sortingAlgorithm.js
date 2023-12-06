let arr = [4, 7, 3, 25, 35, 3, 1];
console.log("Original array: " + arr);

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

//Bubble sort
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j <= arr.length; j++){
            if (arr[j] < arr[i]) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
}

bubbleSort(arr);
console.log("Bubble sorted array: " + arr);

/*
//Insertion sort
function interstionSort(arr) {
    let temp;
    for (let i = 1; i < arr.length; i++){
        let j = i;
        temp = arr[i];
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}
interstionSort(arr);
console.log("Insertion sorted: " + arr);
*/

function insertionSortDescending(arr) {
    let temp;
    for (let i = 1; i < arr.length; i++){
        let j = i;
        temp = arr[i];
        while (j > 0 && arr[j - 1] < temp) {
            arr[j] = arr[j - 1];
            j--;
            arr[j] = temp
        }
    }
    return arr;
}

insertionSortDescending(arr);
console.log("Insertion sorted descending: " + arr);

/*
//Selection sort
function selectionSort(arr) {
    let minIndex;
    for (let i = 0; i < arr.length - 1; i++){
        minIndex = i;
        for (let j = i; j < arr.length; j++){
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            swap(arr, i, minIndex);
        }
    }
    return arr;
}
selectionSort(arr);
console.log("Selection sorted: " + arr);
*/