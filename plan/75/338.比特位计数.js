/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const countOne = (num) => {
    let count = 0
    while (num > 0) {
      if (num % 2) {
        count++
      }
      num = num >> 1
    }
    return count
  }

  const res = new Array(n + 1).fill(0)
  for (let i = 0; i <= n; i++) {
    res[i] = countOne(i)
  }

  return res
}
// @lc code=end
console.log(countBits(5))
