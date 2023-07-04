/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let max = 0
  flowerbed.push(0)
  flowerbed.unshift(0)
  for (let i = 1; i < flowerbed.length - 1; i++) {
    let self = flowerbed[i]
    if (self > 0) {
      i++
    } else {
      let left = flowerbed[i - 1]
      let right = flowerbed[i + 1]
      if (left === 0 && right === 0) {
        flowerbed[0] = 1
        max++
        i++
      }
    }
  }
  return max >= n
}

// console.log(canPlaceFlowers([1, 0, 0, 0, 1]))
// @lc code=end
