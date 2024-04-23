/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  let sum = 0
  let max = 0
  let gNum = 0
  let l = 0
  let r = 0
  while (r < minutes) {
    if (grumpy[r] === 0) {
      sum += customers[r]
    } else {
      gNum += customers[r]
    }
    r++
  }
  max = gNum
  while (r < customers.length) {
    if (grumpy[l] === 1) {
      gNum -= customers[l]
    }
    if (grumpy[r] === 0) {
      sum += customers[r]
    } else {
      gNum += customers[r]
    }
    if (gNum > max) {
      max = gNum
    }
    l++
    r++
  }
  return sum + max
}
// @lc code=end
const args = [[1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3]
console.log(maxSatisfied(...args))
