/*
Problem: Count frequency of each character
Input: "hello"
Output: { h:1, e:1, l:2, o:1 }
*/

function countCharacterFrequency(str){
    let frequency = {};

    for(let char of str){
        frequency[char] = (frequency[char] || 0 ) + 1;
    }
    return frequency;
}

console.log(countCharacterFrequency("Chaitanya"))