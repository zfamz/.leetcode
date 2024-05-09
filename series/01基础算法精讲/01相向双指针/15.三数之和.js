/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ans = []
  let len = nums.length - 1
  // k < i < j
  nums.sort((a, b) => a - b)
  for (let k = 0; k < len - 1; k++) {
    // 只用保证k 不重复， 就不会有重复数组
    if (nums[k] === nums[k - 1]) continue
    let j = len
    let i = k + 1
    // 最大的数 小于 0, 即所有数都不会满足条件
    if (nums[k] + nums[j] + nums[j - 1] < 0) continue
    // 最小的数 大于 0,
    if (nums[k] + nums[i] + nums[i + 1] > 0) break
    while (i < j) {
      let s = nums[k] + nums[i] + nums[j]
      if (s > 0) {
        j--
      } else if (s < 0) {
        i++
      } else {
        ans.push([nums[k], nums[i], nums[j]])
        i++
        while (i < j && nums[i] === nums[i - 1]) i++
        j--
        while (i < j && nums[j] === nums[j + 1]) j--
      }
    }
  }

  return ans
}
// @lc code=end
// const args = [-1, 0, 1, 2, -1, -4]
const args = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
console.log(threeSum(args))
