/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = nums.reduce((a, b) => a + b, 0)
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (sum === total - sum - nums[i]) {
      return i
    }
    sum += nums[i]
  }
  return -1
}
// @lc code=end

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))

// 左右和数组
var pivotIndex_ = function (nums) {
  let N = nums.length
  let right = new Array(N)
  right[N - 1] = 0
  for (let i = N - 2; i >= 0; i--) {
    right[i] = nums[i + 1] + right[i + 1]
  }
  if (right[0] === 0) {
    return 0
  }
  right[0] = 0
  for (let i = 1; i < N; i++) {
    let sum = nums[i - 1] + right[i - 1]
    if (sum === right[i]) {
      return i
    }
    right[i] = sum
  }

  return -1
}
