/*
 * @lc app=leetcode.cn id=2739 lang=javascript
 *
 * [2739] 总行驶距离
 */

// @lc code=start
/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
  let count = 0
  while (mainTank > 0) {
    if (mainTank >= 5) {
      let c = Math.min(additionalTank, parseInt(mainTank / 5))
      let remain = mainTank % 5
      additionalTank -= c
      count += mainTank - remain
      mainTank = remain + c
    } else {
      count += mainTank
      mainTank = 0
    }
  }
  return count * 10
  // return 10 * (mainTank + Math.min(additionalTank, parseInt(mainTank / 5)))
}
// @lc code=end
const args = [9, 1]
console.log(distanceTraveled(...args))
