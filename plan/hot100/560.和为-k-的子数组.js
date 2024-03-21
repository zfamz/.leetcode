/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0
  let map = { 0: 1 }
  let prefixSum = 0
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i]
    let diff = prefixSum - k
    if (map[diff]) {
      count += map[diff]
    }

    if (map[prefixSum]) {
      map[prefixSum]++
    } else {
      map[prefixSum] = 1
    }
  }
  return count
}
// @lc code=end
const args = [[1], 0]
console.log(subarraySum(...args))
