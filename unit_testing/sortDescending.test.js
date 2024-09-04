// sortDescending.test.js
const sortDescending = require('../list_question/sortDescending');

test('should return [5, 4, 3, 3, 2, 2, 1, 1] for input [1, 2, 4, 3, 5, 3, 2, 1]', () => {
  const input = [1, 2, 4, 3, 5, 3, 2, 1];
  const expectedOutput = [5, 4, 3, 3, 2, 2, 1, 1];
  expect(sortDescending(input)).toEqual(expectedOutput);
});

test('should return [10, 9, 8, 7] for input [7, 8, 9, 10]', () => {
  const input = [7, 8, 9, 10];
  const expectedOutput = [10, 9, 8, 7];
  expect(sortDescending(input)).toEqual(expectedOutput);
});

test('should return an empty array for input []', () => {
  const input = [];
  const expectedOutput = [];
  expect(sortDescending(input)).toEqual(expectedOutput);
});

test('should return [5] for input [5]', () => {
  const input = [5];
  const expectedOutput = [5];
  expect(sortDescending(input)).toEqual(expectedOutput);
});
