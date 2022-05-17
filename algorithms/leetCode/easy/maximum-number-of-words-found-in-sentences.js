var mostWordsFound = function (sentences) {
  let count = 0;

  for (let i = 0; i < sentences.length; i++) {
    let arr = sentences[i].split(" ");
    if (arr.length > count) {
      count = arr.length;
    }
  }

  return count;
};

console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
);
//["alice and bob love leetcode","i think so too","this is great thanks very much"]
