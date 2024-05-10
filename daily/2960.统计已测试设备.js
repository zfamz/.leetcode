/*
 * @lc app=leetcode.cn id=2960 lang=javascript
 *
 * [2960] 统计已测试设备
 */

// @lc code=start
/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
  let ans = 0
  for (const b of batteryPercentages) {
    if (b - ans > 0) {
      ans++
    }
  }

  return ans
}
// @lc code=end
const args = [1, 1, 2, 1, 3]
console.log(countTestedDevices(args))
