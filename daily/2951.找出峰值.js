/*
 * @lc app=leetcode.cn id=2951 lang=javascript
 *
 * [2951] 找出峰值
 */

// @lc code=start
/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
  const ans = []
  for (let i = 1; i < mountain.length - 1; i++) {
    item = mountain[i]
    if (item > mountain[i - 1]) {
      if (item > mountain[i + 1]) {
        ans.push(i++)
      }
    }
  }

  return ans
}
// @lc code=end
