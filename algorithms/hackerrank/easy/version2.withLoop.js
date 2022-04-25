function compareTriplets(aliceScores, bobScores) {
    let aliceScores = 0;
    let bobScores = 0;
  
    for (let i = 0; i < aliceScores.length; i++) {
        if (aliceScores[i] > bobScores[i]) {
            aliceScores++;    
        } else if (bobScores[i] > aliceScores[i]) {
            bobScores++;
        }
    }
    
    return [aliceScores, bobScores];

}

let a = [17, 28, 30];
let b = [99, 16, 8];

console.log(compareTriplets(a, b));
