// bill - array of prices
//     k- index of what Anna didnt eat
//     b-the amount of money that Brian charged Anna for her share of the bill.


function bonAppetit(bill, k, b) {
    let sum = 0;
    for (let i = 0; i < bill.length; i++) {
        sum = sum + bill[i];
    }
    let sumForAnna = sum - bill[k];
let overcharge = b - sumForAnna / 2;
    if (b === sumForAnna / 2) {
        return console.log("Bon Appetit");
    } else {
        return console.log(overcharge);
    }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));