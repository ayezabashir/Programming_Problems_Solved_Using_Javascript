let arr = [3,10,7,9,2,4,11]

if (arr.length < 2) {
    console.log("Array has no second maximum");
} else {
    let max = arr[0] >= arr[1] ? arr[0] : arr[1];
    let secondMax = arr[0] < arr[1] ? arr[0] : arr[1];

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }
    if (max === secondMax) {
        console.log("No second maximum found (all elements may be equal)");
    } else {
        console.log("Max:", max);
        console.log("Second Max:", secondMax);
    }
}
