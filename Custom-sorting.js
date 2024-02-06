function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function sortDescendingAndRemovePrimes(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // we gonna Remove prime numbers here
    let index = 0;
    while (index < arr.length) {
        if (isPrime(arr[index])) {
            arr.splice(index, 1);
        } else {
            index++;
        }
    }

    return arr;
}

const numbers = [10, 7, 20, 5, 3, 12, 17, 23];
const sortedWithoutPrimes = sortDescendingAndRemovePrimes(numbers);
console.log(sortedWithoutPrimes);
