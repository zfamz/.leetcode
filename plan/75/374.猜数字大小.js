/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 1
  let r = n
  while (l < n) {
    let mid = Math.floor((l + r) / 2)
    let res = guess(mid)
    if (res === 0) {
      return mid
    } else if (res > 0) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return l
}
// @lc code=end
const args = [2, 2]
function guess(num) {
  const pick = args[1]
  if (num === pick) {
    return 0
  } else if (num > pick) {
    return -1
  } else {
    return 1
  }
}

console.log(guessNumber(args[0]))
