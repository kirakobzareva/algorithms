//  * Complete the 'beautifulBinaryString' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts STRING b as parameter.

function beautifulBinaryString(b) {
  let count = 0;

  while (b.includes("010")) {
    b = b.replace("010", "011");
    count++;
  }
    
  return count;
}

console.log(beautifulBinaryString("0101010010"));

