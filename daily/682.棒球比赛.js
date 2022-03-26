/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const ans = []
  ops.forEach((op) => {
    const index = ans.length - 1
    if (op === '+') {
      ans.push(ans[index] + ans[index - 1])
    } else if (op === 'D') {
      ans.push(ans[index] * 2)
    } else if (op === 'C') {
      ans.pop()
    } else {
      ans.push(parseInt(op))
    }
  })
  return ans.reduce((a, b) => a + b, 0)
}
// @lc code=end

// notes
/**
 * parseInt 只需要默认分数的时候转换，就能保证数组内没有字符串
 */
