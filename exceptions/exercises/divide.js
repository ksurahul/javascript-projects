// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:


function divde (numerator, denominator) {
    if (denominator === 0) {
        throw Error('You cannot divde by 0!')
    }
    return numerator / denominator;
}

console.log(divde(1,4));