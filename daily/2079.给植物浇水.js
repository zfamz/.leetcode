/*
 * @lc app=leetcode.cn id=2079 lang=javascript
 *
 * [2079] 给植物浇水
 */

// @lc code=start
/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  let ans = 0
  let index = 0
  let cap = capacity
  while (index < plants.length) {
    if (cap >= plants[index]) {
      cap = cap - plants[index]
      index++
      ans++
    } else {
      cap = capacity
      ans = ans + (index << 1)
    }
  }
  return ans
}
// @lc code=end
const args = [[1, 1, 1, 4, 2, 3], 4] // 49
// const args = [[7, 7, 7, 7, 7, 7, 7], 8] // 49
console.log(wateringPlants(...args))
