// A
// 1.
function adjacentElementsProduct(inputArray) {
    let a = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (a < inputArray[i] * inputArray[i + 1]) {
            a = inputArray[i] * inputArray[i + 1];
        }
    }
    return a;
}
console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));

// 2.
function alternatingSums(a) {
    let array = [];
    let A = a.reduce(
        (total, value, index) => (index % 2 == 0 ? total + value : total + 0),
        0
    );
    let B = a.reduce(
        (total, value, index) => (index % 2 != 0 ? total + value : total + 0),
        0
    );
    array.push(A, B);
    return array;
}
console.log(alternatingSums([20, 10, 65, 75, 30]));