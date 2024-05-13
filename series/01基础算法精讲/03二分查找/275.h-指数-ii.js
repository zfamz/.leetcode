/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H 指数 II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let n = citations.length
  let left = 1
  let right = n
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if (citations[n - mid] >= mid) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
}
// @lc code=end
const args = [0, 1, 3, 5, 6]
console.log(hIndex(args))
