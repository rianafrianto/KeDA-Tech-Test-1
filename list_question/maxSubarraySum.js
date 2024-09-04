const maxSubarraySum = (arr, num) => {
    if (arr.length < num) return null; // Jika panjang array kurang dari num, tidak ada subarray yang valid
  
    let maxSum = 0;
    
    // Hitung jumlah awal untuk subarray pertama dengan panjang num
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
  
    let tempSum = maxSum;
  
    // Gunakan teknik sliding window untuk menemukan jumlah maksimum subarray dengan panjang num
    for (let i = num; i < arr.length; i++) {
      tempSum += arr[i] - arr[i - num];
      maxSum = Math.max(maxSum, tempSum);
    }
  
    return maxSum;
  };

  module.exports = maxSubarraySum;