/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start

var MyHashSet = function () {
  this.BASE = 1000
  this.set = Array.from({ length: this.BASE }, () => [])
}

/**
 * @param {number} key
 * @return {number}
 */
MyHashSet.prototype.hash = function (key) {
  return key % this.BASE
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const hash = this.hash(key)
  const ins = this.set[hash]
  for (let i = 0; i < ins.length; i++) {
    if (ins[i] === key) return
  }
  ins.push(key)
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const hash = this.hash(key)
  const ins = this.set[hash]
  for (let i = 0; i < ins.length; i++) {
    if (ins[i] === key) {
      ins.splice(i, 1)
    }
  }
}

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const hash = this.hash(key)
  const ins = this.set[hash]
  for (let i = 0; i < ins.length; i++) {
    if (ins[i] === key) return true
  }
  return false
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end
