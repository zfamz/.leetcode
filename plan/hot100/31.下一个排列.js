/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let m = nums.length
  let point = -1
  for (let i = m - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      point = i
      let next = i + 1
      while (nums[next] > nums[i]) next++
      let tmp = nums[i]
      nums[i] = nums[next - 1]
      nums[next - 1] = tmp
      break
    }
  }
  let start = point !== -1 ? point + 1 : 0
  for (let i = 0; i < m - 1; i++) {
    for (let j = start; j < m - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let tmp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = tmp
      }
    }
  }

  return nums
}
// @lc code=end
// const args = [1, 1, 5]
// const args = [1, 3, 2]
const args = [3, 2, 1]
console.log(nextPermutation(args))
