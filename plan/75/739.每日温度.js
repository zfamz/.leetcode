/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length
  const res = new Array(len).fill(0)
  const stack = []
  for (let i = len - 1; i >= 0; i--) {
    let t = temperatures[i]
    while (stack.length && t >= temperatures[stack[0]]) {
      stack.shift()
    }
    if (stack.length) {
      res[i] = stack[0] - i
    }
    stack.unshift(i)
  }
  return res
}
// @lc code=end
const args = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70]
// [8,1,5,4,3,2,1,1,0,0]
console.log(dailyTemperatures(args))

var dailyTemperatures_1 = function (temperatures) {
  const len = temperatures.length
  const res = new Array(len).fill(0)
  const stack = []
  const handle = (i) => {
    if (!stack.length) {
      stack.unshift(i)
      return
    }
    const val = temperatures[i]
    const next = {
      k: stack[0],
      v: temperatures[stack[0]],
    }
    if (val < next.v) {
      res[i] = next.k - i
      stack.unshift(i)
    } else if (val > next.v) {
      stack.shift()
      handle(i)
    } else {
      const _t = res[next.k]
      res[i] = _t ? _t + next.k - i : 0
      stack[0] = i
    }
  }
  for (let i = len - 1; i >= 0; i--) {
    handle(i)
  }
  return res
}
