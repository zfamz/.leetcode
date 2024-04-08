/*
 * @lc app=leetcode.cn id=2009 lang=javascript
 *
 * [2009] 使数组连续的最少操作数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let m = nums.length
  if (m === 1) return 0
  nums.sort((a, b) => a - b)
  nums = Array.from(new Set(nums))

  const diff = m - nums.length
  // console.log('🚀 ~ minOperations ~ diff:', diff, nums)

  const search = (arr, left, right, target) => {
    while (left <= right) {
      const mid = left + ((right - left) >> 1)
      const val = arr[mid]
      if (val < target) {
        left = mid + 1
      } else if (val > target) {
        right = mid - 1
      } else {
        return mid
      }
    }
    return left - 1
  }
  let count = m
  let len = nums.length - 1
  for (let i = 0; i < len; i++) {
    const t = search(nums, i, len, nums[i] + m - 1)
    count = Math.min(m - (t - i + 1), count)
  }
  return count < diff ? diff : count
}
// @lc code=end
// const args = [4, 2, 5, 3]
const args = [8, 5, 9, 9, 8, 4]
console.log(minOperations(args))
