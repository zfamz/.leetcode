/*
 * @lc app=leetcode.cn id=2300 lang=javascript
 *
 * [2300] 咒语和药水的成功对数
 */

// @lc code=start
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b)

  return spells.map((s) => {
    let target = Math.floor((success - 1) / s)
    let l = -1
    let r = potions.length
    while (l + 1 < r) {
      let mid = (l + r) >> 1
      if (potions[mid] > target) {
        r = mid
      } else {
        l = mid
      }
    }
    return potions.length - r
  })
}
// @lc code=end
const args = [[5, 1, 3], [1, 2, 3, 4, 5], 7]
console.log(successfulPairs(...args))
