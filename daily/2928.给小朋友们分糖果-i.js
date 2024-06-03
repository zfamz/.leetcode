/*
 * @lc app=leetcode.cn id=2928 lang=javascript
 *
 * [2928] 给小朋友们分糖果 I
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  if (n > limit * 3) return 0
  let ans = 0
  for (let i = 0; i <= Math.min(limit, n); i++) {
    if (n - i > limit * 2) continue
    ans += Math.min(limit, n - i) + 1 - Math.max(0, n - i - limit)
  }

  return ans
}
// @lc code=end
const args = [3, 3]
console.log(distributeCandies(...args))
