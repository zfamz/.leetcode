/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start

var MedianFinder = function () {
  this.store = []
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let len = this.store.length
  if (len === 0) {
    this.store.push(num)
    return
  }
  let l = 0,
    r = len
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (this.store[mid] < num) {
      l = l + 1
    } else {
      r = mid - 1
    }
  }
  if (l === len) {
    this.store.push(num)
  } else {
    this.store.splice(l, 0, num)
  }
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let len = this.store.length
  if (len === 1) {
    return this.store[0]
  }
  let mid = len >> 1
  if (len & 1) {
    return this.store[mid]
  } else {
    return (this.store[mid] + this.store[mid - 1]) / 2
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
