/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let ans = Infinity
  nums.sort((a, b) => a - b)
  let len = nums.length - 1
  const lMin = (sum) => {
    if (Math.abs(ans - target) > Math.abs(sum - target)) {
      ans = sum
    }
  }
  for (let k = 0; k < len - 1; k++) {
    let i = k + 1
    let j = len
    let min = nums[k] + nums[i] + nums[i + 1]
    if (min > target) {
      lMin(min)
      break
    }
    let max = nums[k] + nums[j] + nums[j - 1]
    if (max < target) {
      lMin(max)
      continue
    }
    while (i < j) {
      let s = nums[k] + nums[i] + nums[j]
      lMin(s)
      if (s > target) {
        j--
      } else {
        i++
      }
    }
  }
  return ans
}
// @lc code=end
const args = [[-1, 2, 1, -4], 1]
console.log(threeSumClosest(...args))
