/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = []
  candidates.sort((a, b) => a - b)
  const backtrack = (arr, total, start, path) => {
    if (total >= target) {
      if (total === target) ans.push(path.slice())
      return true
    }
    for (let i = start; i < arr.length; i++) {
      let val = arr[i]
      path.push(val)
      const hit = backtrack(arr, total + val, i, path)
      path.pop()
      if (hit) break
    }
  }
  backtrack(candidates, 0, 0, [])
  return ans
}
// @lc code=end
const args = [[2, 3, 6, 7], 7]
console.log(combinationSum(...args))
