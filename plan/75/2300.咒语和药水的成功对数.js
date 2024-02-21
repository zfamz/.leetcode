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
  const bSearch = (arr, l, r, target) => {
    if (l > r) {
      return l
    }
    let mid = l + Math.floor((r - l) / 2)
    let val = arr[mid]
    if (val >= target) {
      return bSearch(arr, l, mid - 1, target)
    } else {
      return bSearch(arr, mid + 1, r, target)
    }
  }
  potions.sort((a, b) => a - b)
  return spells.map((item) => {
    let target = Math.ceil(success / item)
    return potions.length - bSearch(potions, 0, potions.length - 1, target)
  })
}
// @lc code=end
const args = [
  [14],
  [
    25, 19, 30, 37, 14, 30, 38, 22, 38, 38, 26, 33, 34, 23, 40, 28, 15, 29, 36, 39, 39, 37, 32, 38,
    8, 17, 39, 20, 4, 39, 39, 7, 30, 35, 29, 23,
  ],
  317,
]
console.log(successfulPairs(...args))
