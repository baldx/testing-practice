function averageValue(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

export default averageValue;


// arr.forEach(num => {
//     total += num;
// })
// object.average = total / arr.length;

// return object.average;