/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = {}
  for (const num of nums) {
    if (map[num]) {
      map[num] += 1
    } else {
      map[num] = 1
    }
  }
  let max = 0
  let ans = ''
  Object.keys(map).forEach((key) => {
    let val = map[key]
    if (val > max) {
      ans = key
      max = val
    }
  })
  return ans
}
// @lc code=end
const args = [3, 3, 4]
console.log(majorityElement(args))
