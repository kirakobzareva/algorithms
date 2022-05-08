function minimumDistances(a) {
  let results = [];
  let minDistance;

  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) != a.lastIndexOf(a[i])) {
      minDistance = a.lastIndexOf(a[i]) - a.indexOf(a[i]);
      results.push(minDistance);
    }
  }

    if (results.length === 0) {
        return -1;
    } else {
        results.sort(function (a, b) {
            return a - b;
        })
    return results[0];
  }
}

console.log(minimumDistances([1, 2, 3, 4, 10]));
