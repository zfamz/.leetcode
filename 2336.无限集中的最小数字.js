/*
 * @lc app=leetcode.cn id=2336 lang=javascript
 *
 * [2336] 无限集中的最小数字
 */

// @lc code=start

var SmallestInfiniteSet = function () {
  const len = 1000
  this.set = new Array(len)
  this.small = 1
  for (let i = 0; i < len; i++) {
    this.set[i] = i + 1
  }
}

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  const out = this.set.shift()
  if (out === this.small) {
    this.small++
  }
  return out
}

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (num >= this.small) return
  let index = -1
  this.set.every((v, i) => {
    if (v === num) return false
    if (v > num) {
      index = i
      return false
    }
    return true
  })
  if (index >= 0) {
    this.set.splice(index, 0, num)
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

// @lc code=end

var obj = new SmallestInfiniteSet()
console.log(obj.popSmallest())
console.log(obj.popSmallest())
obj.addBack(1)
console.log(obj.popSmallest())
