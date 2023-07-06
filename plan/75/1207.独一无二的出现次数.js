/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = {}
  for (const num of arr) {
    if (map[num]) {
      map[num]++
    } else {
      map[num] = 1
    }
  }
  let lenArr = Object.values(map)
  return new Set(lenArr).size === lenArr.length
}
// @lc code=end

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
