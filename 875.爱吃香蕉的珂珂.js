/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let low = 1,
    high = 1
  for (const v of piles) {
    if (v > high) {
      high = v
    }
  }
  const getTime = (k) => {
    let time = 0
    piles.forEach((v) => {
      time += Math.ceil(v / k)
    })
    return time
  }
  while (low < high) {
    const mid = (low + high) >> 1
    const time = getTime(mid)
    if (time <= h) {
      high = mid
    } else {
      low = mid + 1
    }
  }
  return low
}
// @lc code=end
const args = [[30, 11, 23, 4, 20], 5]
// const args = [[312884471], 312884470]
console.log(minEatingSpeed(...args))
