/*
 * @lc app=leetcode.cn id=901 lang=javascript
 *
 * [901] 股票价格跨度
 */

// @lc code=start

var StockSpanner = function () {
  this.stock = []
  this.maxStock = []
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  while (this.maxStock.length && price >= this.stock[this.maxStock[this.maxStock.length - 1]]) {
    this.maxStock.pop()
  }
  let count = 1
  if (this.maxStock.length) {
    count = this.stock.length - this.maxStock[this.maxStock.length - 1]
  } else {
    count = this.stock.length + 1
  }
  this.maxStock.push(this.stock.length)
  this.stock.push(price)
  // console.log(count)
  return count
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end
let stockSpanner = new StockSpanner()
stockSpanner.next(31)
stockSpanner.next(32)
stockSpanner.next(33)
stockSpanner.next(34)
// stockSpanner.next(100) // 返回 1
// stockSpanner.next(80) // 返回 1
// stockSpanner.next(60) // 返回 1
// stockSpanner.next(70) // 返回 2
// stockSpanner.next(60) // 返回 1
// stockSpanner.next(75) // 返回 4 ，因为截至今天的最后 4 个股价 (包括今天的股价 75) 都小于或等于今天的股价。
// stockSpanner.next(85) // 返回 6
