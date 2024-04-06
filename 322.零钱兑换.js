/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let m = amount + 1
  const dp = new Array(m).fill(m)
  dp[0] = 0
  for (let i = 0; i < m; i++) {
    for (const coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }
  const ans = dp[m - 1]
  return ans === m ? -1 : ans
}
// @lc code=end
// const args = [[1, 2, 5], 11]
// const args = [[411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422], 9864]
const args = [[186, 419, 83, 408], 6249]
console.log(coinChange(...args))

// dfs + 记忆优化
var coinChange_2 = function (coins, amount) {
  let cache = {}
  const dfs = (list, target) => {
    if (target <= 0) {
      if (target === 0) {
        return 0
      }
      return -1
    }

    if (cache[target]) {
      return cache[target]
    }
    let res = Infinity
    for (const coin of list) {
      let _res = dfs(list, target - coin)
      if (_res >= 0) {
        res = Math.min(res, _res + 1)
      }
    }
    cache[target] = res
    return res
  }

  let ans = dfs(coins, amount)

  return ans === Infinity ? -1 : ans
}

// 回溯 超时
function coinChange_1(coins, amount) {
  let ans = Infinity
  coins.sort((a, b) => b - a)
  const backstrack = (list, target, start, path) => {
    if (path.length >= ans) return
    if (target <= 0) {
      if (target === 0) {
        ans = Math.min(path.length, ans)
      }
      return
    }
    for (let i = start; i < list.length; i++) {
      const coin = list[i]
      path.push(coin)
      backstrack(list, target - coin, i, path)
      path.pop()
    }
  }

  backstrack(coins, amount, 0, [])
  return ans === Infinity ? -1 : ans
  // return  backstrack(coins,amount, [])
}
