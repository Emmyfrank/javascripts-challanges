function reverseArray(arr) {
    const reversedArray = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }

    return reversedArray;
}

// log in console
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers); 
