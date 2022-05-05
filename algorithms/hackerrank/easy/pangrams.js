//   Complete the 'pangrams' function below.
 
//   The function is expected to return a STRING.
//   The function accepts STRING s as parameter.
 

function pangrams(s) {
    let small = s.toLowerCase();
    let abc = "abcdefghijklmnopqrstuvwxyz";
    
    for (let letter of abc) {
     if (!small.includes(letter)) {
       return "not pangram";
        }
   }
   return "pangram";
}

console.log(
  pangrams("We promptly judged antique ivory buckles for the next prize")
);
