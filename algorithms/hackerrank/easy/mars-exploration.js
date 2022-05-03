


function marsExploration(s) {
    let count = 0;
    let countOf = s.length / 3;
    for (let index = 0; index < s.length-1; index+=3) {
        let part = s.slice(index, index+3)
        if ((part[0] != "S")) {
          count++;
        } if ((part[1] != "O")) {
          count++;
        }  if ((part[2] != "S")) {
          count++;
        }
    }
    return count;
}

console.log(marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS"));
