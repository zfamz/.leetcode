/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let n = operations.length
  let arr = new Array(n).fill(0)
  let index = 0
  for (const char of operations) {
    switch (char) {
      case '+':
        arr[index] = arr[index - 1] + arr[index - 2]
        break
      case 'D':
        arr[index] = 2 * arr[index - 1]
        break
      case 'C':
        arr[index - 1] = 0
        index = index - 2
        break
      default:
        arr[index] = parseInt(char)
        break
    }
    index++
  }
  return arr.reduce((a, b) => {
    return a + b
  }, 0)
}
// @lc code=end

const args = ['5', '2', 'C', 'D', '+']
console.log(calPoints(args))

var calPoints_2 = function (operations) {
  let n = operations.length
  let arr = new Array(n).fill(0)
  let index = 0
  for (let i = 0; i < n; i++) {
    switch (operations[i]) {
      case '+':
        arr[index] = arr[index - 1] + arr[index - 2]
        break
      case 'D':
        arr[index] = 2 * arr[index - 1]
        break
      case 'C':
        arr[index - 1] = 0
        index = index - 2
        break
      default:
        arr[index] = parseInt(operations[i])
        break
    }
    index++
  }
  console.log(arr)
  return arr.reduce((a, b) => {
    return a + b
  }, 0)
}
