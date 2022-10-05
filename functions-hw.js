// 1. Function
// Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }

    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2. Function
// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = function (a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }

}
console.log(maxOfThree(3, 6, 12));

// 3. Function
// Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(character) {
    if (character === "a" || character === "i" || character === "o" || character === "u" || character === "y") {
        console.log("Char is a vowel")
    } else {
        console.log("Char is not a vowel")
    }
}
isCharAVowel("v");







