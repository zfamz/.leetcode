/*
 * @lc app=leetcode.cn id=2908 lang=javascript
 *
 * [2908] 元素和最小的山形三元组 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  let m = nums.length
  let left = new Array(m)
  let right = new Array(m)
  let min = Infinity
  for (let i = 1; i < m - 1; i++) {
    min = Math.min(min, nums[i - 1])
    left[i] = min
  }
  min = Infinity
  for (let i = m - 2; i > 0; i--) {
    min = Math.min(min, nums[i + 1])
    right[i] = min
  }
  let ans = Infinity
  for (let i = 1; i < m - 1; i++) {
    let val = nums[i]
    if (val > left[i] && val > right[i]) {
      ans = Math.min(ans, val + left[i] + right[i])
    }
  }
  return ans === Infinity ? -1 : ans
}
// @lc code=end
// const args = [8, 6, 1, 5, 3]
const args = [6, 5, 4, 3, 4, 5]
console.log(minimumSum(args))
