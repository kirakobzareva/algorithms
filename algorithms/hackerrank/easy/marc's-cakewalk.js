//  посчитать сколько минимально миль должен пройти Марк, чтобы сжечь каллоии
// - по формуле 2 в степень номер капкейка уможенное на каллории
//  - массив с каллориями

function marcsCakewalk(calorie) {
    let miles = 0;
    let newArr = calorie.sort(function(a, b){return b - a});

    for (let i = 0; i < newArr.length; i++) {
        miles += Math.pow(2, i) * newArr[i];
    }

    return miles;
}

console.log(marcsCakewalk([ 504, 378, 291, 380, 728, 630, 797, 212, 32, 792, 895, 635, 850, 853, 859, 127, 653, 655, 476, 748]));

