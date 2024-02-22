/*
 * @lc app=leetcode.cn id=1268 lang=javascript
 *
 * [1268] 搜索推荐系统
 */

// @lc code=start
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  class Trie {
    constructor(products) {
      this.children = {}
      this.buildMap(products)
    }
    buildMap(products) {
      for (let i = 0; i < products.length; i++) {
        let node = this.children
        for (const ch of products[i]) {
          if (!node[ch]) {
            node[ch] = {}
          }
          node = node[ch]
        }
        node.isEnd = true
      }
    }
  }
  let t = new Trie(products.sort())

  let ans = []
  const path = []
  const backtrack = (node, prefix) => {
    if (ans.length === 3) return
    if (node.isEnd) {
      ans.push(prefix + path.join(''))
    }
    for (const key in node) {
      if (key !== 'isEnd') {
        path.push(key)
        backtrack(node[key], prefix)
        path.pop()
      }
    }
  }

  let node = t.children
  const res = []
  let str = ''
  for (const ch of searchWord) {
    node = node[ch]
    if (!node) {
      res.push(...new Array(searchWord.length - res.length).fill([]))
      return res
    }
    str += ch
    backtrack(node, str)
    res.push(ans)
    ans = []
  }

  return res
}
// @lc code=end

// const args = [['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'], 'mouse']
const args = [['hava'], 'asdf']
console.log(suggestedProducts(...args))
