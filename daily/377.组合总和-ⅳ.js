/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i < dp.length; i++) {
    let sum = 0
    for (const num of nums) {
      if (i >= num) {
        sum += dp[i - num]
      }
    }
    dp[i] = sum
  }

  return dp[target]
}
// @lc code=end
const args = [1, 2, 3]
console.log(combinationSum4(args, 32))

// 暴力超时
var combinationSum4_ = function (nums, target) {
  let ans = 0
  const dfs = (arr, target) => {
    if (target < 0) return
    if (target === 0) {
      ans++
      return
    }
    for (const num of arr) {
      dfs(arr, target - num)
    }
  }
  dfs(nums, target)

  return ans
}
