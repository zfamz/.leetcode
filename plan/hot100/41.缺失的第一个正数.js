/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let m = nums.length
  for (let i = 0; i < m; i++) {
    while (nums[i] > 0 && nums[i] < m && nums[i] !== nums[nums[i] - 1]) {
      let index = nums[i]
      nums[i] = nums[index - 1]
      nums[index - 1] = index
    }
  }
  for (let i = 0; i < m; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }
  return m + 1
}
// @lc code=end
const args = [3, 4, -1, 1]
console.log(firstMissingPositive(args))

// 排序 O(NlogN)
var firstMissingPositive_1 = function (nums) {
  nums.sort((a, b) => a - b)
  let min = 1
  let i = 0
  while (i < nums.length) {
    while (nums[i] < min) i++
    if (nums[i] === min) {
      i++
      min++
    } else {
      return min
    }
  }
  return min
}
