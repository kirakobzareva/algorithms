export function compareTheTriplets(a, b) {
    let c = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            c[0]++;
        } else if (a[i] < b[i]) {
            c[1]++;
        }
    }
    return c;
}





