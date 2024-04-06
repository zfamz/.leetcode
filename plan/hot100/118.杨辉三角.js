/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ans = [[1]]
  for (let i = 1; i < numRows; i++) {
    let arr = ans[i - 1].slice()
    arr.push(1)
    for (let j = arr.length - 2; j > 0; j--) {
      arr[j] = arr[j] + arr[j - 1]
    }
    ans.push(arr)
  }
  return ans
}
// @lc code=end
console.log(generate(5))

var generate = function (numRows) {
  if (numRows === 1) return [[1]]
  const ans = new Array(numRows).fill(0).map((_) => [])
  ans[0] = [1]
  ans[1] = [1, 1]
  for (let i = 2; i < numRows; i++) {
    const _arr = ans[i]
    _arr.push(1)
    for (let j = 1; j < i; j++) {
      _arr.push(ans[i - 1][j - 1] + ans[i - 1][j])
    }
    _arr.push(1)
  }
  return ans
}
