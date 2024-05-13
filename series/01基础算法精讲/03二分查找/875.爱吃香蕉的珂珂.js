/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 0
  let right = Math.max(...piles)
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    let s = 0
    for (const p of piles) {
      s += Math.ceil(p / mid)
    }
    if (s <= h) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}
// @lc code=end
const args = [[3, 6, 7, 11], 8]
console.log(minEatingSpeed(...args))
