/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let ans = new Array(num_people).fill(0)
  let start = 1
  while (candies > 0) {
    for (let i = 0; i < num_people; i++) {
      if (candies > start) {
        ans[i] += start
        candies -= start
      } else {
        ans[i] += candies
        candies = 0
      }
      start++
    }
  }

  return ans
}
// @lc code=end
const args = [10, 3]
console.log(distributeCandies(...args))
