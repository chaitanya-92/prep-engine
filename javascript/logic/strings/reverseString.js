/*
Problem: Reverse a string
Example:
Input: "hello"
Output: "olleh"

Time Complexity: O(n)
Space Complexity: O(n)
*/

// with inbuilt functions
function reverseString(str){
    return str.split('').reverse().join('');
}

// without inbuild functions
function reverseString2(str){
    revstr=''
    for(i=str.length-1;i>=0;i--){
        revstr += str[i];
    }
    return revstr;
}


console.log(reverseString("hello"))

console.log(reverseString2("World"))