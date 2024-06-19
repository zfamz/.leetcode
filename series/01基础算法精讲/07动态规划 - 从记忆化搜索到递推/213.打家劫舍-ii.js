/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const _rob = (arr) => {
    let n = arr.length
    let f = new Array(n + 2).fill(0)
    for (let i = 0; i < n; i++) {
      f[i + 2] = Math.max(f[i + 1], f[i] + arr[i])
    }
    return f[n + 1]
  }
  return Math.max(_rob(nums.slice(1)), nums[0] + _rob(nums.slice(2, nums.length - 1)))
}
// @lc code=end
const args = [1, 2, 3, 1]
console.log(rob(args))
