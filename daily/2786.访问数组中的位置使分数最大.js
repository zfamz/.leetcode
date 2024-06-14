/*
 * @lc app=leetcode.cn id=2786 lang=javascript
 *
 * [2786] 访问数组中的位置使分数最大
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function (nums, x) {
  const n = nums.length
  let even = 0
  let odd = 0
  !(nums[0] & 1) ? (odd = -Infinity) : (even = -Infinity)
  for (let i = 0; i < n; i++) {
    let num = nums[i]
    if (!(num & 1)) {
      even = Math.max(even + num, odd + num - x)
    } else {
      odd = Math.max(odd + num, even + num - x)
    }
  }
  return Math.max(even, odd)
}
// @lc code=end
// const args = [[2, 3, 6, 1, 9, 2], 5]
const args = [[8, 50, 65, 85, 8, 73, 55, 50, 29, 95, 5, 68, 52, 79], 74]
console.log(maxScore(...args))
