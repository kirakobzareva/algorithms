



function lonelyinteger(a) {
    let unique = [] ;

    for (let i = 0; i < a.length; i++) {
        if (unique.includes(a[i])){
            let index = unique.indexOf(a[i]);
            unique.splice(index, 1);
        } else {
            unique.push(a[i]);
        }
    }

    return unique[0];
}

console.log(lonelyinteger([0, 0, 1, 2, 1]));