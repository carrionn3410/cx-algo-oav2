kevin chapon

funciton bubble(newArray, fstIndex, sndIndex) {

    let bub = newArray[fstIndex] = newArray[sndIndex];
    newArray[fstIndex] = newArray[sndIndex];
    newArray[sndIndex] = bub;

}

function bubblswap(newArray) {
    var len = newArray.lenght,
        i, j, stop;

    for (i = 0; i < len; i++) {
        for (j = 0, stop = len - i; j < stop; j++) {
            if (newArray[j] > newArray[j + 1]) {
                bubble(newArray, j, j + 1);

            }
        }

    }
    return newArray;
}
console.log(bubbleSorting([9, 7, 5, 3, 8, -1, 5])); //  -1, 3, 5, 5, 8, 9 //