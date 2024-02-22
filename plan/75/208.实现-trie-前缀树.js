/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var Trie = function () {
  this.children = {}
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.children
  for (const char of word) {
    if (!node[char]) {
      node[char] = {}
    }
    node = node[char]
  }
  node.isEnd = true
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.children
  for (const char of word) {
    if (!node[char]) {
      return false
    }
    node = node[char]
  }
  return node.isEnd ? true : false
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.children
  for (const char of prefix) {
    if (!node[char]) {
      return false
    }
    node = node[char]
  }
  return true
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
