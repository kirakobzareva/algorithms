// function alternatingCharacters(s) {
//     let numberOfDeletings = [];
//
//     for (let i = 0; i < s.length; i++) {
//         let word = s[i];
//         let count = 0;
//         for (let j = 0; j < word.length; j++) {
//             if (word[j] === word[j+1]){
//                 count++;
//             }
//         }
//         numberOfDeletings.push(count);
//     }
//
//     return numberOfDeletings;
// }

function alternatingCharacters(s) {
    let count = 0;

    for (let i = 0; i < s.length ; i++) {
        if (s[i] === s[i+1]){
            count++;
        }
    }

    return count;
}

console.log(alternatingCharacters("AAAA"));