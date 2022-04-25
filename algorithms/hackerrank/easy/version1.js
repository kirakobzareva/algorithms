function compareTriplets(aliceScores, bobScores) {
    
    let step1 = tmp(aliceScores[0], bobScores[0]);
    let step2 = tmp(aliceScores[1], bobScores[1]);
    let step3 = tmp(aliceScores[2], bobScores[2]);

    function tmp(aliceScoreForNomination, bobScoreForNomination,) {
        if (aliceScoreForNomination > bobScoreForNomination) {
            return [1, 0];
        } else if (aliceScoreForNomination < bobScoreForNomination) {
            return [0, 1];
        }
    }

    function sumScores(index) {
        return step1[index] + step2[index] + step3[index];
    }
    
    return [sumScores(0), sumScores(1)];
}


let a = [17, 28, 30];
let b = [99, 16, 8];

console.log(compareTriplets(a, b));