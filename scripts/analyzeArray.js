function averageValue (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

function minValue (arr) {
    let minValue;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) return minValue = arr[i];
        else return;
    }
    return minValue;
}

function maxValue (arr) {
    return arr.sort()[arr.length - 1]
}

export {averageValue, minValue, maxValue};


// arr.forEach(num => {
//     total += num;
// })
// object.average = total / arr.length;

// return object.average;