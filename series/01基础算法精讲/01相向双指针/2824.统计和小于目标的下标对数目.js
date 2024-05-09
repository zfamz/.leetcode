/*
 * @lc app=leetcode.cn id=2824 lang=javascript
 *
 * [2824] 统计和小于目标的下标对数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  nums.sort((a, b) => a - b)
  let ans = 0
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    let s = nums[i] + nums[j]
    if (s >= target) {
      j--
    } else {
      ans += j - i
      i++
    }
  }
  return ans
}
// @lc code=end
const args = [[-1, 1, 2, 3, 1], 2]
console.log(countPairs(...args))
