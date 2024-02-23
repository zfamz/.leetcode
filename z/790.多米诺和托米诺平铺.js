/*
 * @lc app=leetcode.cn id=790 lang=javascript
 *
 * [790] 多米诺和托米诺平铺
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  // f(n) = 2f(n-1)+ f(n-3)

  let MOD = 10 ** 9 + 7
  const f = new Array(n + 1).fill(0)
  f[0] = f[1] = 1
  f[2] = 2
  f[3] = 5
  for (let i = 4; i <= n; i++) {
    f[i] = (2 * f[i - 1] + f[i - 3]) % MOD
  }
  return f[n]
}
// @lc code=end
console.log(numTilings(4))
