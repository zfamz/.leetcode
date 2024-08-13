/*
 * @lc app=leetcode.cn id=676 lang=javascript
 *
 * [676] 实现一个魔法字典
 */

// @lc code=start

var MagicDictionary = function () {
  this.map = new Map()
}

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
  for (const dict of dictionary) {
    const len = dict.length
    if (!this.map.has(len)) {
      this.map.set(len, [])
    }
    let arr = this.map.get(len)
    arr.push(dict)
  }
}

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  const len = searchWord.length
  if (!this.map.get(len)) {
    return false
  }
  let m = this.map.get(len)
  for (const char of m) {
    let i = 0,
      j = 0,
      count = 0
    while (i < len) {
      if (searchWord[i] !== char[j]) {
        count++
        if (count > 1) {
          break
        }
      }
      i++
      j++
    }
    if (count === 1) {
      return true
    }
  }
  return false
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// @lc code=end
let magicDictionary = new MagicDictionary()
magicDictionary.buildDict(['hello', 'leetcode'])
magicDictionary.search('hello') // 返回 False
magicDictionary.search('hhllo') // 将第二个 'h' 替换为 'e' 可以匹配 "hello" ，所以返回 True
magicDictionary.search('hell') // 返回 False
magicDictionary.search('leetcoded') // 返回 False
