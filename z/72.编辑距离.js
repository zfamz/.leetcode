/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let m = word1.length,
    n = word2.length
  let cache = new Array(m).fill(0).map(() => new Array(n).fill(-1))
  const dfs = (i, j) => {
    if (i < 0) return j + 1
    if (j < 0) return i + 1
    if (cache[i][j] !== -1) {
      return cache[i][j]
    }
    let res
    if (word1[i] === word2[j]) {
      res = dfs(i - 1, j - 1)
    } else {
      res = Math.min(dfs(i - 1, j), dfs(i, j - 1), dfs(i - 1, j - 1)) + 1
    }
    cache[i][j] = res
    return res
  }
  return dfs(m - 1, n - 1)
}

// @lc code=end
const args = ['horse', 'ros']
console.log(minDistance(...args))
