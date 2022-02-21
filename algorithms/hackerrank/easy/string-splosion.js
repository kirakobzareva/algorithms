// Given a non-empty string like "Code" return a string like "CCoCodCode".
//
//
// stringSplosion("Code") → "CCoCodCode"
// stringSplosion("abc") → "aababc"
// stringSplosion("ab") → "aab"

function stringSplosion(str) {
    let newString = "";

    for (let i = 0; i < str.length; i++) {
        let part = str.slice(0, i + 1);
        newString = newString + part;
    }

    return newString;
}


console.log(stringSplosion("Bad"));