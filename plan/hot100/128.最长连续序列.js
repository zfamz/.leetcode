/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums)
  let ans = 0
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let currLen = 1
      while (set.has(++num)) {
        currLen++
      }
      ans = Math.max(ans, currLen)
    }
  }
  return ans
}
// @lc code=end
const args = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
console.log(longestConsecutive(args))

var longestConsecutive_1 = function (nums) {
  if (!nums.length) return 0
  nums = [...new Set(nums)]
  nums.sort((a, b) => a - b)
  let ans = 0
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1]
    if (diff === 1) {
      count++
    } else {
      if (count > ans) {
        ans = count
      }
      count = 1
    }
  }

  if (count > ans) {
    ans = count
  }

  return ans
}
