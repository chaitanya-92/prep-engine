// Input: "listen", "silent"
// Output: true

function  checkAnagram(str1,str2)
{
    if(str1.length!==str2.length)
    {
        return false;
    }
    
    let sorted1 = str1.toLowerCase().split('').sort().join('');
    let sorted2 = str2.toLowerCase().split('').sort().join('');

    return sorted1 === sorted2 ;
}

console.log(checkAnagram("listen","silent"))

console.log(checkAnagram("listen","silentttt"))