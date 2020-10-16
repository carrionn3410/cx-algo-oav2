kevin Chapon

function selectionSort(arr) {
    return arr;
}

function selectionSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        let min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j])
                min = j;

        }
    }

    if (i !== min) {
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}
return arr;
}

console.log(selectionSort([5, 6, 1, 3, 22, -1])) // [-1, 1, 3, 5, 6, 22]