/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let max = parseInt(Math.sqrt(n))
  const nums = []
  for (let i = max; i > 0; i--) {
    nums.push(i * i)
  }

  let ans = Infinity
  const dfs = (target, level, start) => {
    if (level >= ans) return
    if (target === 0) {
      ans = level
      return
    }
    for (let i = start; i < nums.length; i++) {
      if (target >= nums[i]) {
        let t = target - nums[i]
        dfs(t, level + 1, t < nums[i] ? i + 1 : i)
      }
    }
  }
  dfs(n, 0, 0)

  return ans
}
// @lc code=end
const args = 13
console.log(numSquares(args))
