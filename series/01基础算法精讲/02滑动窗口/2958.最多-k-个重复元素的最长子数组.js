/*
 * @lc app=leetcode.cn id=2958 lang=javascript
 *
 * [2958] 最多 K 个重复元素的最长子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  let ans = 1
  let left = 0
  let map = {}
  for (let right = 0; right < nums.length; right++) {
    let num = nums[right]
    if (!map[num]) {
      map[num] = 1
    } else {
      map[num]++
    }
    while (map[num] > k) {
      map[nums[left]]--
      left++
    }
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}
// @lc code=end
const args = [[1, 2, 3, 1, 2, 3, 1, 2], 2]
console.log(maxSubarrayLength(...args))

var maxSubarrayLength_1 = function (nums, k) {
  let ans = 1
  let m = nums.length
  let left = 0
  let map = new Map()
  for (let right = 0; right < m; right++) {
    let num = nums[right]
    if (!map.has(num)) {
      map.set(num, 0)
    }
    let val = map.get(num)
    if (val === k) {
      while (nums[left] !== num) {
        map.set(nums[left], map.get(nums[left]) - 1)
        left++
      }
      left++
    } else {
      map.set(num, val + 1)
    }
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}
