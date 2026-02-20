/*
Problem: Check if a string is palindrome
Input: "madam"
Output: true
*/

function checkPalindrome(str)
{
    const reverse = str.split('').reverse().join('');
    return str === reverse;
}

console.log(checkPalindrome("madam"))