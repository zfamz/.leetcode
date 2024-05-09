/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    let s = numbers[left] + numbers[right]
    if (s > target) {
      right--
    } else if (s < target) {
      left++
    } else {
      break
    }
  }
  return [left + 1, right + 1]
}
// @lc code=end
const args = [[2, 7, 11, 15], 9]
console.log(twoSum(...args))
