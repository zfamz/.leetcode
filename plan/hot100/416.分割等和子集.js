/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((a, b) => {
    return a + b
  }, 0)
  if (sum & 1) {
    return false
  }
  let half = sum >> 1

  let dp = Array.from({ length: nums.length }, () => new Uint8Array(half + 1))
  dp[0][nums[0]] = 1
  for (let i = 1; i < nums.length; i++) {
    let val = nums[i]
    for (let j = 0; j <= half; j++) {
      dp[i][j] = dp[i - 1][j]
      if (val === j) {
        dp[i][j] = 1
      } else if (val < j) {
        dp[i][j] = dp[i - 1][j] | dp[i - 1][j - val]
      }
    }
  }

  return Boolean(dp[nums.length - 1][half])
}
// @lc code=end
const args = [1, 5, 10, 6]
console.log(canPartition(args))
