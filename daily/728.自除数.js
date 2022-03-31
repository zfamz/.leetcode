/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const ans = []
  const isNature = (num) => {
    const _num = num
    while (num > 0) {
      const end = _num % (num % 10)
      if (end !== 0) {
        return false
      }
      num = parseInt(num / 10)
    }
    return true
  }
  for (let i = left; i <= right; i++) {
    isNature(i) && ans.push(i)
  }

  return ans
}
// @lc code=end

// console.log(selfDividingNumbers(47, 85))
