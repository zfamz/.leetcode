/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let ans = 0
  let end = 0
  let maxPosition = 0
  let m = nums.length - 1
  for (let i = 0; i < m; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i])
    if (maxPosition >= m) {
      return ans + 1
    }
    if (i === end) {
      ans++
      end = maxPosition
    }
  }

  return ans
}
// @lc code=end

const args = [2, 3, 1]
console.log(jump(args))
