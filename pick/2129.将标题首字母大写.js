/*
 * @lc app=leetcode.cn id=2129 lang=javascript
 *
 * [2129] 将标题首字母大写
 */

// @lc code=start
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  return title
    .split(' ')
    .map((item) => {
      if (item.length <= 2) {
        return item.toLowerCase()
      }
      return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    })
    .join(' ')
}
// @lc code=end
const args = 'First leTTeR of EACH Word'
console.log(capitalizeTitle(args))

var capitalizeTitle_1 = function (title) {
  let chars = title.split(' ')
  console.log(chars)
  chars = chars.map((item) => {
    item = item.toLowerCase()
    if (item.length > 2) {
      item = item.charAt(0).toUpperCase() + item.slice(1)
    }
    return item
  })
  return chars.join(' ')
}
