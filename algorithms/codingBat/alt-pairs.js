// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".
//
//
// altPairs("kitten") → "kien"
// altPairs("Chocolate") → "Chole"
// altPairs("CodingHorror") → "Congrr"


function altPairs(str) {
    let newStr = "";
    let firstLetter = "";
    let secontLetter = "";

    for (let i = 0; i < str.length; i = i + 4) {
        firstLetter = str[i];
        newStr = newStr + firstLetter;
        firstLetter = "";
        for (let j = i+1; j < str.length; j = j + 4) {
            secontLetter = str[j];
            newStr = newStr + secontLetter;
            secontLetter = "";
            break;
        }
    }

    return newStr;
}

console.log(altPairs("ThisThatTheOther"));

