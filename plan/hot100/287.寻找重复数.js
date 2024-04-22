/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0
  let fast = 0
  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (fast !== slow)
  fast = 0
  while (fast !== slow) {
    fast = nums[fast]
    slow = nums[slow]
  }

  return slow
}
// @lc code=end
const args = [1, 3, 4, 2, 2]
console.log(findDuplicate(args))
