/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let m = nums.length
  k = k % m
  let temp = new Array(m)
  for (let i = 0; i < m; i++) {
    temp[i] = nums[(m - k + i) % m]
  }
  for (let i = 0; i < m; i++) {
    nums[i] = temp[i]
  }
}
// @lc code=end
const args = [[1, 2, 3, 4, 5, 6, 7], 3]
console.log(rotate(...args))
