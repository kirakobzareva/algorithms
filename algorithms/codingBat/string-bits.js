// Given a string, return a new string made of every other char starting with the first,
// so "Hello" yields "Hlo".
//
//
// stringBits("Hello") → "Hlo"
// stringBits("Hi") → "H"
// stringBits("Heeololeo") → "Hello"

function stringBits(str) {
    let newStr = "";
    let part = "";

    if (!str) {
        return "";
    } else if (str.length < 3) {
        newStr = str[0];
        return newStr;
    }

        for (let i = 0; i <= str.length - 1; i = i + 2) {
            part = str[i];
            newStr = newStr + part;
            part = "";
        }

        return newStr;
}

    console.log(stringBits("hxaxpxpxy"));

