const sortDescending = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let maxIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIdx]) {
        maxIdx = j;
      }
    }
    if (maxIdx !== i) {
      [arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]]; // Destructuring untuk swap
    }
  }
  return arr;
};

module.exports = sortDescending;