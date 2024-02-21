/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var tribonacci = function (n) {
  let arr = [0, 1, 1, 2]
  if (n < 4) {
    return arr[n]
  }
  for (let i = 3; i < n; i++) {
    arr[0] = arr[1]
    arr[1] = arr[2]
    arr[2] = arr[3]
    arr[3] = arr[0] + arr[1] + arr[2]
  }
  return arr[3]
}
// @lc code=end
console.log(tribonacci(34))

let arr = [0, 1, 1]
var tribonacci_1 = function (n) {
  if (n === 0) {
    return 0
  }
  if (arr[n]) {
    return arr[n]
  }
  arr[n] = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1)
  return arr[n]
}
