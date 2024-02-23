/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length
  const f = new Array(len + 2).fill(0)
  for (let i = 0; i < len; i++) {
    f[i + 2] = Math.max(f[i] + nums[i], f[i + 1])
  }
  return f[len + 1]
}
// @lc code=end
const args = [2, 7, 9, 3, 1]
console.log(rob(args))

var rob_1 = function (nums) {
  const len = nums.length
  const memo = new Array(len).fill(-1)
  const dfs = (i) => {
    if (i < 0) {
      return 0
    }
    if (memo[i] !== -1) {
      return memo[i]
    }
    return (memo[i] = Math.max(dfs(i - 2) + nums[i], dfs(i - 1)))
  }
  return dfs(len - 1)
}
