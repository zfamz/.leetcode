/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  // 两小边之和大于第三边即可构成三角形
  nums.sort((a, b) => a - b)
  let ans = 0
  let len = nums.length
  //  固定最长边
  // 如果固定最短边的话， 当两边之和小第3条边时，即可以事最长边边短，也可以是短边边长，导致无法准确判断
  for (let k = 2; k <= len; k++) {
    let i = 0
    let j = k - 1
    let target = nums[k]
    while (i < j) {
      let s = nums[i] + nums[j]
      if (s > target) {
        ans += j - i
        j--
      } else {
        i++
      }
    }
  }
  return ans
}
// @lc code=end
const args = [2, 2, 3, 4] // 3
// const args = [24, 3, 82, 22, 35, 84, 19] // 10
console.log(triangleNumber(args))
