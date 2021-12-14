// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

// s - начало дома
// t - конец дома
// a - где стоит яблочное д
// b - где стоит апельсиновое д
// 2 массива с поинтами куда падают фрукты (которые надо прибавить к местоположению деревьев,
//     чтобы понять попадают они в дом или нет)

// 1)  прибавить a к каждому числу массива apples
// 2)  прибавить b к каждому числу массива oranges

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    apples = apples.map(function (currentApple) {
        return currentApple + a;
    });

    oranges = oranges.map(function (currentOrange) {
        return currentOrange + b;
    })

    let countOfApples = 0;
    let countOfOranges = 0;

    for (let i = 0; i < apples.length; i++) {
        if (apples[i] >= s && apples[i] <= t) {
            countOfApples++;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        if (oranges[i] >= s && oranges[i] <= t) {
            countOfOranges++;
        }
    }
    return [countOfApples, countOfOranges];
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
