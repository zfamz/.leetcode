/*
 * @lc app=leetcode.cn id=3137 lang=javascript
 *
 * [3137] K 周期字符串需要的最少操作次数
 */

// @lc code=start
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumOperationsToMakeKPeriodic = function (word, k) {
  let n = word.length
  let start = 0
  let map = {}
  while (start < n) {
    let end = start + k
    let str = word.substring(start, end)
    if (!map[str]) {
      map[str] = 0
    }
    map[str]++
    start = end
  }
  let long = Math.max(...Object.values(map))
  return n / k - long
}
// @lc code=end
const args = ['leetcodeleet', 4]
console.log(minimumOperationsToMakeKPeriodic(...args))
 