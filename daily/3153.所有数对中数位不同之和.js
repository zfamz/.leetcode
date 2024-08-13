/*
 * @lc app=leetcode.cn id=3153 lang=javascript
 *
 * [3153] 所有数对中数位不同之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function (nums) {
  let ans = 0
  while (nums[0] > 0) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
      let mod = nums[i] % 10
      if (obj[mod]) {
        obj[mod] += 1
      } else {
        obj[mod] = 1
      }
      ans = ans + i + 1 - obj[mod]
      nums[i] = (nums[i] / 10) | 0
    }
  }
  return ans
}
// @lc code=end
const args = [13, 23, 12]
console.log(sumDigitDifferences(args))

var sumDigitDifferences_2 = function (nums) {
  let ans = 0
  while (nums[0] > 0) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
      let mod = nums[i] % 10
      if (obj[mod]) {
        obj[mod] += 1
      } else {
        obj[mod] = 1
      }
      nums[i] = (nums[i] / 10) | 0
    }
    let arr = Object.values(obj)
    let n = arr.length
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        ans = ans + arr[i] * arr[j]
      }
    }
  }
  return ans
}
