// maxSubarraySum.test.js
const maxSubarraySum = require('../list_question/maxSubarraySum'); // Pastikan path ini sesuai dengan lokasi file Anda

test('maxSubarraySum([100, 200, 300, 400], 2) should return 700', () => {
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
});

test('maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) should return 39', () => {
  expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
});

test('maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) should return 5', () => {
  expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
});

test('maxSubarraySum([2, 3], 3) should return null', () => {
  expect(maxSubarraySum([2, 3], 3)).toBeNull(); // Kasus ketika panjang array lebih kecil dari num
});
