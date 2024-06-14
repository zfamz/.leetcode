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
  let map = new Map()
  const dfs = (n) => {
    if (map.has(n)) {
      return map.get(n)
    }
    if (n < 0) {
      return 0
    }

    const res = Math.max(dfs(n - 1), dfs(n - 2) + nums[n])
    map.set(n, res)
    return res
  }
  return dfs(nums.length - 1)
}
// @lc code=end
const args = [1, 2, 3, 1]
console.log(rob(args))

var rob_2 = function (nums) {
  let n = nums.length
  let dp = new Array(n + 2).fill(0)
  for (let i = 0; i < n; i++) {
    dp[i + 2] = Math.max(dp[i + 1], dp[i] + nums[i])
  }
  return dp[n + 1]
}

var rob_3 = function (nums) {
  let f1 = 0
  let f0 = 0
  for (let i = 0; i < nums.length; i++) {
    let _f = Math.max(f1, f0 + nums[i])
    f0 = f1
    f1 = _f
  }
  return f1
}
