/*
 * @lc app=leetcode.cn id=2563 lang=javascript
 *
 * [2563] 统计公平数对的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b)

  const lowerbound = (l, r, arr, target) => {
    while (l + 1 < r) {
      let mid = (l + r) >> 1
      if (arr[mid] < target) {
        l = mid
      } else {
        r = mid
      }
    }
    return r
  }

  let ans = 0
  let n = nums.length
  console.log(nums)
  for (let i = 0; i < n; i++) {
    let target = lower - nums[i]
    let left = lowerbound(i, n, nums, target)
    target = upper - nums[i] + 1
    let right = lowerbound(i, n, nums, target)
    ans += right - left
  }

  return ans
}
// @lc code=end
// const args = [[0, 1, 7, 4, 4, 5], 3, 6]
const args = [[1, 7, 9, 2, 5], 11, 11]
console.log(countFairPairs(...args))
