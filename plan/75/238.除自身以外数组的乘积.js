/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let left = [1, nums[0]]
  let right = [nums[nums.length - 1], 1]

  for (let i = 2; i < nums.length; i++) {
    left.push(nums[i - 1] * left[i - 1])
  }
  for (let i = nums.length - 3; i >= 0; i--) {
    right.unshift(nums[i + 1] * right[0])
  }
  console.log(left, right)
  return left.map((item, i) => {
    return item * right[i]
  })
}

// console.log(productExceptSelf([-1, 1, 0, -3, 3]))
// @lc code=end
