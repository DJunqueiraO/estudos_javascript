const algarisms = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

function romanToIndian(romanNumber = '') {
    const numbersArray = romanNumber.split('').map(n => algarisms[n])
    let result = 0
    for (let i = numbersArray.length - 1; i >= 0; i--) {
        let element = numbersArray[i];
        numbersArray.forEach((n, j) => {
            if(i < j && parseInt(n) > parseInt(element)) {
                element *= -1
            }
        })
        result += element
    }
    return result 
}

console.log(romanToIndian("I"))    // 1
console.log(romanToIndian("II"))   // 2
console.log(romanToIndian("III"))  // 3
console.log(romanToIndian("IV"))   // 4
console.log(romanToIndian("V"))    // 5
console.log(romanToIndian("VI"))   // 6
console.log(romanToIndian("VII"))  // 7
console.log(romanToIndian("VIII")) // 8
console.log(romanToIndian("XII"))  // 12
console.log(romanToIndian("XIV"))  // 14
console.log(romanToIndian("XV"))   // 15

console.log(romanToIndian("XVI"))   // 16  
console.log(romanToIndian("XIX"))   // 19  
console.log(romanToIndian("XX"))    // 20  
console.log(romanToIndian("XXIV"))  // 24  
console.log(romanToIndian("XXX"))   // 30  
console.log(romanToIndian("XL"))    // 40  
console.log(romanToIndian("L"))     // 50  
console.log(romanToIndian("LX"))    // 60  
console.log(romanToIndian("XC"))    // 90  
console.log(romanToIndian("C"))     // 100  

