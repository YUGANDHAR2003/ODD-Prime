/**
 * Counts the number of digits in a given number.
 * @param {number} inputNumber - The input number to count digits for.
 * @returns {number} - The count of digits in the input number.
 */
function countDigits(inputNumber) {
    let count = 0
    while (inputNumber > 0) {
        count++
        inputNumber = Math.floor(inputNumber / 10)
    }
    return count
}

/**
 * Checks if a number has the "ODD" property.
 * @param {number} inputNumber - The input number to check for the "ODD" property.
 * @returns {boolean} - True if the input number has the "ODD" property, otherwise false.
 */
function isOddPropertyNumber(inputNumber) {
    if (inputNumber < 10) {
        return false // Single-digit numbers can't have the "ODD" property
    }

    let lastDigit = inputNumber % 10
    inputNumber = Math.floor(inputNumber / 10)

    while (inputNumber > 0) {
        let currentDigit = inputNumber % 10
        if (Math.abs(lastDigit - currentDigit) !== 1) {
            return false // Not ODD
        }
        lastDigit = currentDigit
        inputNumber = Math.floor(inputNumber / 10)
    }

    return true // ODD
}

/**
 * Checks if a number is prime.
 * @param {number} num - The input number to check for primality.
 * @returns {boolean} - True if the input number is prime, otherwise false.
 */
function isPrime(num) {
    if (num <= 1) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

/**
 * Counts and prints the ODD property prime numbers between 0 and 10 million.
 */
function countAndPrintOddPropertyPrimeNumbers() {
    let count = 0

    for (let i = 10; i <= 10000000; i++) { // Start from 10 to skip single-digit numbers
        if (isOddPropertyNumber(i) && isPrime(i)) {
            count++
            console.log("ODD property prime number: " + i)
        }
    }

    console.log("Number of ODD property prime numbers between 0 and 10 million: " + count)
}

// Call the function to count and print ODD property prime numbers
countAndPrintOddPropertyPrimeNumbers()
