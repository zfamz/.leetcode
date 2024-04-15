/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {}
  for (const num of nums) {
    if (map[num]) {
      map[num]++
    } else {
      map[num] = 1
    }
  }
  let ans = Object.keys(map)
  ans.sort((a, b) => map[b] - map[a])

  return ans.slice(0, k)
}
// @lc code=end
const args = [[1, 1, 1, 2, 2, 3], 2]
console.log(topKFrequent(...args))
