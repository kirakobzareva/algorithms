//  * Complete the 'stringConstruction' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts STRING s as parameter.

function stringConstruction(s) {
  let cost = 0;
  let abc = [];

  for (let i = 0; i < s.length; i++) {
    if (!abc.includes(s[i])) {
      abc.push(s[i]);
      cost++;
    }
  }

  return cost;
}

console.log(stringConstruction("ab"));
