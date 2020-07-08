function mergeSort(arr1, arr2) {
    var first = 0;
    var second = 0;
    var result = [];
    while (first < arr1.length && second < arr2.length) {
        if (arr1[first] === -1) {
            arr1 += 1;
            continue;
        }
        if (arr2[second] === -1) {
            arr2 += 1;
            continue;
        }
        if (arr1[first] <= arr2[second]) {
            result.push(arr1[first]);
            first += 1;
        } else {
            result.push(arr2[second]);
            second += 1;
        }
    }
    while (first < arr1.length) {
        result.push(arr1[first]);
        first += 1;
    }

    while (second < arr2.length) {
        result.push(arr2[second]);
        second += 1;
    }

    return result;
}

const arrX = [3, 5, 7];
const arrY = [0, 1, 2];

mergeSort(arrX, arrY)

// merges and sorts 2 arrays javascript