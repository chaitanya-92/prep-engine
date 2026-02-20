
// Input: "aabbcddee"
// Output: "c"

function firstNonRepeatingCharacter(str)
{
    let frequency = {}
    for(let char of str)
    {
        frequency[char] = (frequency[char] || 0 ) + 1;
    }
    console.log(frequency)
    for(let char of str)
    {
        if(frequency[char]==1)
            return char;
    }

    return null;

}


console.log(firstNonRepeatingCharacter("ccchhaitanya"))