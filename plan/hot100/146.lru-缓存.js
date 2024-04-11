/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.size = capacity
  this.stack = new Map()
  this.activeStack = []
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.stack.has(key)) {
    let index = this.activeStack.indexOf(key)
    if (index != this.activeStack.length) {
      this.activeStack.splice(index, 1)
      this.activeStack.push(key)
    }
    return this.stack.get(key)
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.stack.size === this.size && !this.stack.has(key)) {
    let key = this.activeStack.shift()
    this.stack.delete(key)
  }
  if (this.stack.has(key)) {
    let index = this.activeStack.indexOf(key)
    if (index != this.activeStack.length) {
      this.activeStack.splice(index, 1)
    }
  }
  this.stack.set(key, value)
  this.activeStack.push(key)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
