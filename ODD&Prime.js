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
    let initialCount = countDigits(inputNumber)

    if (initialCount === 1) {
        return false // Not ODD
    }

    while (inputNumber > 0) {
        let temp = inputNumber
        let rem1 = Math.floor(inputNumber % 10)
        inputNumber = Math.floor(temp / 10)
        let rem2 = Math.floor(inputNumber % 10)

        if (Math.abs(rem1 - rem2) !== 1) {
            return false // Not ODD
        }
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
 * Counts the number of ODD property prime numbers between 0 and 10 million.
 */
function countOddPropertyPrimeNumbers() {
    let count = 0

    for (let i = 0; i <= 10000000; i++) {
        if (isOddPropertyNumber(i) && isPrime(i)) {
            count++
            console.log("ODD property prime number: " + i)
        }
    }

    console.log("Number of ODD property prime numbers between 0 and 10 million: " + count)
}

// Call the function to count ODD property prime numbers
countOddPropertyPrimeNumbers()
