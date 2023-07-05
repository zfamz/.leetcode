/*
 * @lc app=leetcode.cn id=1493 lang=javascript
 *
 * [1493] 删掉一个元素以后全为 1 的最长子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let arr = []
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      arr.push(count)
      count = 0
      let flag = i
      while (nums[i + 1] === 0) {
        i++
      }
      if (flag < i) {
        arr.push(0)
      }
    } else {
      count++
    }
  }
  if (arr.length === 0) {
    return count - 1
  }
  arr.push(count)
  let max = 0
  arr.reduce((a, b) => {
    let sum = a + b
    if (sum > max) {
      max = sum
    }
    return b
  }, 0)
  return max
}
// @lc code=end

console.log(longestSubarray([0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1]))
