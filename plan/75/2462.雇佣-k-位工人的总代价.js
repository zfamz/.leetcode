/*
 * @lc app=leetcode.cn id=2462 lang=javascript
 *
 * [2462] 雇佣 K 位工人的总代价
 */

// @lc code=start
class PQ {
  constructor(arr) {
    this.queue = arr
    this.sort()
  }
  sort() {
    this.queue.sort((a, b) => a - b)
  }
  size() {
    return this.queue.length
  }
  push(i) {
    let len = this.size()
    if (len === 0) {
      this.queue.push(i)
      return
    } else if (len === 1) {
      if (i >= this.top()) {
        this.queue.push(i)
      } else {
        this.queue.unshift(i)
      }
      return
    }
    if (i <= this.top()) {
      this.queue.unshift(i)
      return
    }
    if (i >= this.queue[this.size() - 1]) {
      this.queue.push(i)
      return
    }
    let l = 0,
      r = len - 1
    while (l < r) {
      let m = (l + r) >> 1
      if (this.queue[m] <= i) {
        l = m + 1
      } else {
        r = m
      }
    }
    this.queue.splice(l, 0, i)
  }
  pop() {
    return this.queue.shift()
  }
  top() {
    return this.queue[0]
  }
}
/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
  let ans = 0

  if (candidates * 2 < costs.length) {
    let left = candidates
    let right = costs.length - candidates - 1
    let l_q = new PQ(costs.slice(0, candidates))
    let r_q = new PQ(costs.slice(costs.length - candidates))
    while (k && left <= right) {
      let res
      if (l_q.top() <= r_q.top()) {
        res = l_q.pop()
        l_q.push(costs[left++])
      } else {
        res = r_q.pop()
        r_q.push(costs[right--])
      }
      // console.log(res)
      ans += res
      k--
    }
    costs = l_q.queue.concat(r_q.queue)
  }

  costs.sort((a, b) => a - b)
  for (let i = 0; i < k; i++) {
    ans += costs[i]
  }
  return ans
}
// @lc code=end
// const args = [[31, 25, 72, 79, 74, 65, 84, 91, 18, 59, 27, 9, 81, 33, 17, 58], 11, 2] // 423
const args = [
  [
    42, 28, 56, 5, 53, 35, 88, 77, 1, 66, 57, 41, 50, 27, 52, 70, 67, 60, 65, 99, 49, 84, 82, 31,
    45, 94, 62, 45, 32, 71, 61, 61, 61, 23, 47, 34,
  ],
  11,
  3,
] // 423
// 56, 88, 77, 1, 66, 57, 41, 50, 27, 52, 70, 67, 60, 65, 99, 49, 84, 82, 31,
// 45, 94, 62, 45, 32, 71, 61, 61, 61,  47,
// const args = [[17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4]
console.log(totalCost(...args))
