//count how many words

function camelcase(s) {
    let count = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i].toUpperCase()) {
            count++;
        }
    }
    return count + 1;
}

console.log(camelcase("saveChangesInTheEditor"));