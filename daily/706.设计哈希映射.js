/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start

var MyHashMap = function () {
  this.BASE = 1000
  this.map = Array.from({ length: this.BASE }, () => [])
}

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.hash = function (key) {
  return key % this.BASE
}

MyHashMap.prototype.getIns = function (key) {
  let h_key = this.hash(key)
  return this.map[h_key]
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  let ins = this.getIns(key)
  for (let i = 0; i < ins.length; i++) {
    if (ins[i][0] === key) {
      ins[i][1] = value
      return
    }
  }
  ins.push([key, value])
}

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  let ins = this.getIns(key)
  for (let i = 0; i < ins.length; i++) {
    if (ins[i][0] === key) {
      return ins[i][1]
    }
  }
  return -1
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  let ins = this.getIns(key)
  for (let i = 0; i < ins.length; i++) {
    if (ins[i][0] === key) {
      ins.splice(i, 1)
      return
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
