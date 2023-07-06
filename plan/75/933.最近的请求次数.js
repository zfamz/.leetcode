/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function () {
  this.pings = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.pings.push(t)
  let min = t - 3000
  while (this.pings[0] < min) {
    this.pings.shift()
  }
  return this.pings.length

  // 保证 每次对 ping 的调用都使用比之前更大的 t 值。
  // 有上面的条件，且没有保存历史的需求
  /*
  let len = this.pings.length
  if (min < 1 || this.pings[0] >= min) {
    return len
  }
  let start = 0
  let end = len - 1
  while (start < end) {
    let mid = (start + end) >> 1
    let time = this.pings[mid]
    if (time > min) {
      end = mid
    } else if (time === min) {
      return len - mid
    } else {
      start = mid + 1
    }
  }
  return len - end
  */
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

let c = new RecentCounter()
console.log(c.ping(3002))
