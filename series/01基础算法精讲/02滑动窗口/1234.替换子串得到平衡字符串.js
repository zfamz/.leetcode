/*
 * @lc app=leetcode.cn id=1234 lang=javascript
 *
 * [1234] 替换子串得到平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  let map = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0,
  }

  for (const char of s) {
    map[char]++
  }
  let n = s.length
  let m = n >> 2
  let ans = n
  let left = 0
  for (let right = 0; right < n; right++) {
    map[s[right]]--
    while (Object.keys(map).every((key) => map[key] <= m)) {
      ans = Math.min(ans, right - left + 1)
      map[s[left]]++
      left++
    }
  }

  return ans
}
// @lc code=end
const args = 'QQQW'
console.log(balancedString(args))
