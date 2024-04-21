/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let ans = -Infinity
  let max = 1
  let min = max
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let _max = max * num
    let _min = min * num
    max = Math.max(num, _max, _min)
    min = Math.min(num, _max, _min)
    ans = Math.max(max, ans)
  }
  return ans
}
// @lc code=end
const args = [2, 3, -2, 4]
console.log(maxProduct(args))
