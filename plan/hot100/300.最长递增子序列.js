/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const ans = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    let val = nums[i]
    if (val > ans[ans.length - 1]) {
      ans.push(val)
    } else {
      let l = 0
      let r = ans.length - 1
      while (l <= r) {
        const mid = l + ((r - l) >> 1)
        if (ans[mid] < val) {
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
      ans[l] = val
    }
  }
  return ans.length
}
// @lc code=end
const args = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(lengthOfLIS(args))
