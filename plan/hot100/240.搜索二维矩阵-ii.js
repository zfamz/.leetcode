/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length
  let n = matrix[0].length
  let len = Math.min(m, n)
  let pointer = len
  for (let i = 0; i < len; i++) {
    if (matrix[i][i] >= target) {
      if (matrix[i][i] === target) return true
      pointer = i
      break
    }
  }

  const search = (arr, start, end, target) => {
    let l = start,
      r = end
    while (l <= r) {
      let mid = l + ((r - l) >> 1)
      if (arr[mid] > target) {
        r = mid - 1
      } else if (arr[mid] < target) {
        l = mid + 1
      } else {
        return true
      }
    }
    return false
  }
  let hit = false
  for (let i = 0; i < pointer; i++) {
    if (hit) {
      return true
    } else {
      hit = search(matrix[i], pointer, n - 1, target)
    }
  }
  for (let i = pointer; i < m; i++) {
    if (hit) {
      return true
    } else {
      hit = search(matrix[i], 0, pointer - 1, target)
    }
  }

  return hit
}
// @lc code=end
const args = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
]
// const args = [[-1, 3, 8, 98]]
console.log(searchMatrix(args, 15))
