// x - cat A
// y - cat B
// z - mouse C




function catAndMouse(x, y, z) {

    if (Math.abs(x - z) > Math.abs(y - z)) {
        return "Cat B";
    } else if (Math.abs(x - z) === Math.abs(y - z)) {
        return "Mouse C";
    }
    return "Cat A";
}

console.log(catAndMouse(1, 2, 3));