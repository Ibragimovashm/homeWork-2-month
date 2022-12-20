function reverseString(string){
    let reverseString = ''
    for (let i = string.length -1; i >= 0; i--){
        reverseString += string[i]
    }
    return reverseString
}
console.log(reverseString('string'))
///////////////////////////////////////////////////////////////////////////
function getMiddleNumber (numbers) {
    let stringedNumbers = String(numbers)
    let sum = 0
    for (let i = 0; i < stringedNumbers.length; i++){
        sum += +stringedNumbers[i]
    }
    return sum/stringedNumbers.length
}
console.log(getMiddleNumber(987654329876876543));
////////////////////////////////////////////////////////////
