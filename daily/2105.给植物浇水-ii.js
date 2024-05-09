/*
 * @lc app=leetcode.cn id=2105 lang=javascript
 *
 * [2105] 给植物浇水 II
 */

// @lc code=start
/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function (plants, capacityA, capacityB) {
  let l = 0
  let r = plants.length - 1
  let ca = capacityA
  let cb = capacityB
  let ans = 0
  while (l < r) {
    if (plants[l] > ca) {
      ca = capacityA
      ans++
    }
    ca = ca - plants[l++]
    if (plants[r] > cb) {
      cb = capacityB
      ans++
    }
    cb = cb - plants[r--]
  }

  if (l === r) {
    let max = Math.max(ca, cb)
    if (max < plants[l]) {
      ans++
    }
  }

  return ans
}
// @lc code=end
// const args = [[2, 2, 3, 3], 3, 4]
const args = [[2, 2, 3, 3], 5, 5]
console.log(minimumRefill(...args))
