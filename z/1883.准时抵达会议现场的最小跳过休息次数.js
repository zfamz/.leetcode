/*
 * @lc app=leetcode.cn id=1883 lang=javascript
 *
 * [1883] 准时抵达会议现场的最小跳过休息次数
 */

// @lc code=start
/**
 * @param {number[]} dist
 * @param {number} speed
 * @param {number} hoursBefore
 * @return {number}
 */
var minSkips = function (dist, speed, hoursBefore) {
  let ans = 0
  let max =
    dist.reduce((a, b) => {
      return a + b
    }, 0) / speed
  if (hoursBefore > max) {
    return -1
  }

  let count = 0
  const backstrack = () => {
    return
  }

  return ans
}

// @lc code=end
const args = [[7, 3, 5, 5], 2, 10]
console.log(minSkips(...args))
