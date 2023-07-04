/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = 0
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i]
    }
  }
  max = max - extraCandies
  return candies.map((i) => i >= max)
}
// @lc code=end
