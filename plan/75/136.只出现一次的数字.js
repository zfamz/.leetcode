/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((a, b) => {
    return a ^ b
  }, 0)
}
// @lc code=end
const args = [2, 2, 1]
console.log(singleNumber(args))

var singleNumber_1 = function (nums) {
  let s = new Set(nums)
  const getArrSum = (arr) => {
    return arr.reduce((a, b) => {
      return a + b
    }, 0)
  }

  return getArrSum(Array.from(s)) * 2 - getArrSum(nums)
}
