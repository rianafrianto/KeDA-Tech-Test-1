const sumEvenNumbers = require('../list_question/sumEvenNumbers');

test('sumEvenNumbers for input1 should return 6', () => {
    const input = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup"
        }
      }
    };
    expect(sumEvenNumbers(input)).toBe(6);
  });
  
  test('sumEvenNumbers for input2 should return 12', () => {
    const input = {
      a: 2,
      b: {b: 2, bb: {b: 3, bb: {b: 2}}},
      c: {c: {c: 2}, cc: 'ball', ccc: 5},
      d: 1,
      e: {e: {e: 4}, ee: 'car'}
    };
    expect(sumEvenNumbers(input)).toBe(12);
  });