function fibs(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    if (i == 0 || i == 1) arr.push(i);
    else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr;
}

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
