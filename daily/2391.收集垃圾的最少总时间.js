/*
 * @lc app=leetcode.cn id=2391 lang=javascript
 *
 * [2391] 收集垃圾的最少总时间
 */

// @lc code=start
/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  let sum = 0
  const pre_sum = travel.map((val) => {
    sum += val
    return sum
  })
  let map = {
    M: 0,
    P: 0,
    G: 0,
  }
  let tKeys = ['M', 'P', 'G']
  sum = 0
  for (let i = garbage.length - 1; i >= 0; i--) {
    let s = garbage[i]
    sum += s.length
    tKeys.forEach((key) => {
      if (!map[key] && s.includes(key)) {
        map[key] = i
      }
    })
  }
  sum += tKeys.reduce((a, b) => {
    return a + (map[b] > 0 ? pre_sum[map[b] - 1] : 0)
  }, 0)

  return sum
}
// @lc code=end
const args = [
  ['G', 'P', 'GP', 'GG'],
  [2, 4, 3],
]
console.log(garbageCollection(...args))
