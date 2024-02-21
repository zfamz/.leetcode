/*
 * @lc app=leetcode.cn id=2336 lang=javascript
 *
 * [2336] 无限集中的最小数字
 */

// @lc code=start

var SmallestInfiniteSet = function () {
  this.set = []
  this.small = 1
}

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  if (this.set.length) {
    return this.set.shift()
  }
  const res = this.small
  this.small++
  return res
}

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (num >= this.small) return
  let index = -1
  const res = this.set.every((v, i) => {
    if (v === num) return false
    if (v > num) {
      index = i
      return false
    }
    return true
  })
  if (res) {
    this.set.push(num)
  } else if (index >= 0) {
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
