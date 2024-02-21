/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const rangeSum = (start, range) => {
    return ((start + start + range - 1) * range) / 2
  }

  let res = []
  let path = []
  const backtrack = (start, total) => {
    if (path.length === k) {
      if (total === n) {
        res.push([...path])
      }
      return
    }
    for (let i = start; i <= 9; i++) {
      if (total + 1 > n) {
        return
      }
      path.push(i)
      backtrack(i + 1, total + i)
      path.pop()
    }
  }
  backtrack(1, 0)
  return res
}
// @lc code=end
const args = [3, 9]
console.log(combinationSum3(...args))
