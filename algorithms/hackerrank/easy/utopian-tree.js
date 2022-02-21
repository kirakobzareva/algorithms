// The Utopian Tree goes through 2 cycles of growth every year.
// Each spring, it doubles in height. Each summer, its height increases by 1 meter.
// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring.
// How tall will the tree be after n growth cycles?



function utopianTree(n) {
let height = 1;

    for (let i = 1; i <= n; i++) {
        if (i%2 === 0){
            height++;
        } else{
            height = height * 2;
        }
    }
    return height;
}

console.log(utopianTree(4));