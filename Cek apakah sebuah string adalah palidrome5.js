 //5. Cek apakah sebuah string adalah palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
