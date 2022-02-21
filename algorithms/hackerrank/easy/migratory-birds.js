// Given an array of bird sightings where every element represents a bird type id,
// determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount,
// return the smallest of their ids.



function migratoryBirds(arr) {
let birds = {};
let id = 0;

    for (let num of arr) {
        if (birds[num]){
            birds[num]= birds[num] + 1;
        } else{
            birds[num] = 1;
        }
    }

    for (const bird in birds) {
        if (birds[bird] > id){
            id = bird;
        }
       // console.log(`${bird}: ${birds[bird]}`);
    }
    
return id;
}

//migratoryBirds([1,1,2,2,3]);

console.log(migratoryBirds([1,1,2,2,3]));