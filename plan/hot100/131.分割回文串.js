/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let m = s.length
  let ans = []
  const isPartition = (i, j) => {
    while (i < j) {
      if (s.charAt(i++) !== s.charAt(j--)) {
        return false
      }
    }
    return true
  }
  const dfs = (i, path) => {
    if (i === m) {
      ans.push(path.slice())
    }
    for (let j = i; j < m; j++) {
      if (isPartition(i, j)) {
        path.push(s.substring(i, j + 1))
        dfs(j + 1, path)
        path.pop()
      }
    }
  }
  dfs(0, [])
  return ans
}
// @lc code=end
const args = 'aabbfbcd'
console.log(partition(args))
