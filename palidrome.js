function isPalindrome(str) {
    // replace non-alphanumeric characters and convert them to  lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the  string equal to the reverse
    for (let i = 0; i < cleanStr.length / 2; i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// log in console
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("race car")); 
console.log(isPalindrome("hello")); 
