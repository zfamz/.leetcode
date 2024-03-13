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
  nums.sort((a, b) => a - b)
  let ans = []
  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) {
      break
    }
    while (k && nums[k] === nums[k - 1]) {
      k++
    }
    let i = k + 1
    let j = nums.length - 1
    const up = () => {
      i++
      while (nums[i] === nums[i - 1] && i < j) {
        i++
      }
    }
    const down = () => {
      do {
        j--
      } while (nums[j] === nums[j + 1] && i < j)
    }
    while (i < j) {
      let sum = nums[k] + nums[i] + nums[j]
      if (sum === 0) {
        ans.push([nums[k], nums[i], nums[j]])
        up()
        down()
      } else if (sum > 0) {
        down()
      } else {
        up()
      }
    }
  }
  return ans
}
// @lc code=end
const args = [-2, 0, 0, 2, 2]
console.log(threeSum(args))
