/*
 * @lc app=leetcode.cn id=1702 lang=javascript
 *
 * [1702] 修改后的最大二进制字符串
 */

// @lc code=start
/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function (binary) {
  let i = binary.indexOf('0')
  if (i === -1) {
    return binary
  }
  let m = binary.length
  let count = 0
  for (; i < m; i++) {
    if (binary.charAt(i) === '1') {
      count++
    }
  }

  return ''.padEnd(m - count - 1, '1') + '0' + ''.padEnd(count, '1')
}
// @lc code=end
const args = '1100'
console.log(maximumBinaryString(args))
