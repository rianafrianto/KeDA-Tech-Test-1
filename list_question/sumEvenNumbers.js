const sumEvenNumbers = (obj) => {
    let total = 0;
  
    const recursiveSum = (current) => {
      if (current === null || typeof current !== 'object') {
        if (typeof current === 'number' && current % 2 === 0) {
          total += current;
        }
        return;
      }
  
      for (const key in current) {
        if (Object.prototype.hasOwnProperty.call(current, key)) {
          recursiveSum(current[key]);
        }
      }
    };
  
    recursiveSum(obj);
    return total;
  };
  
  module.exports = sumEvenNumbers;
  