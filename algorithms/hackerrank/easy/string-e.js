//
// Return true if the given string contains between 1 and 3 'e' chars.
//
//
// stringE("Hello") → true
// stringE("Heelle") → true
// stringE("Heelele") → false

export function stringE(str) {
    let myArr = str.split("");
    let e = 0;
    for (let i = 0; i <= myArr.length; i++) {
        if (myArr[i] === "e") {
            e++;
        }
    }
    if (e >= 1 && e <= 3) {
        return true;
    }
    return false;
}

