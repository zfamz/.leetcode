/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var Trie = function () {
  this.set = []
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  this.set.push(word)
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  return this.set.includes(word)
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  for (let i = 0; i < this.set.length; i++) {
    if (this.set[i].slice(0, prefix.length) === prefix) {
      return true
    }
  }
  return false
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

const word = 'apple',
  prefix = 'app'
var obj = new Trie()
obj.insert(word)
var param_2 = obj.search(word)
var param_3 = obj.startsWith(prefix)
console.log(param_2)
console.log(param_3)
