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
        return true
    } else {
        return false
    }
}
console.log(isCharAVowel("a"));

// 4. Function
// Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.



const sumArray = (...args) => {
    let base = 0;
    args.forEach((num) => {
        base += num
    })
    return base
}

console.log(sumArray(2, 4, 5))


// 5. Function
// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]);would return 40

function multiplyArray(...args) {
    let baseTwo = 1;
    args.forEach((num) => {
        baseTwo *= num
    })
    return baseTwo
}

console.log(multiplyArray(2, 4, 5))

// 6. Function
// Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

const numArgs = (...args) => {
    console.log(args.length);
}

numArgs(5, 6, 7, 8, 9);


// 7. Function
// Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

function reverseString(str) {
    const arrStr = str.split("").reverse()
    console.log(arrStr)
}

reverseString("Nimo");

