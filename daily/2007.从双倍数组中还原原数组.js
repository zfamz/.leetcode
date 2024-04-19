/*
 * @lc app=leetcode.cn id=2007 lang=javascript
 *
 * [2007] 从双倍数组中还原原数组
 */

// @lc code=start
/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
  if (changed.length & 1) return []
  let ans = []
  let map = {}
  for (const num of changed) {
    if (map[num]) {
      map[num]++
    } else {
      map[num] = 1
    }
  }
  let keys = Object.keys(map).sort((a, b) => b - a)
  let i = 0
  while (i < keys.length) {
    let val = keys[i]
    if (map[val] > 0) {
      let half = val / 2
      if (map[half]) {
        ans.push(half)
        map[val]--
        map[half]--
      } else {
        return []
      }
    } else {
      i++
    }
  }

  return ans
}
// @lc code=end
const args = [1, 3, 4, 2, 2, 4, 6, 8]
console.log(findOriginalArray(args))
