export function sum(a, b) {
    if (a % 2 === 0) {
        return a + b;
    } else {
        return b + a ;
    }
}

 console.log(sum(3,5));