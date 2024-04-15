/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let map = {}
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i)
    if (map[char]) {
      map[char][1] = i
    } else {
      map[char] = [i, i]
    }
  }
  let ans = []
  const arr = Object.keys(map)
  let l = 0,
    r = 0
  for (const char of arr) {
    let [start, end] = map[char]
    if (start <= r) {
      if (end > r) {
        r = end
      }
    } else {
      ans.push(r - l + 1)
      l = start
      r = end
    }
  }
  ans.push(r - l + 1)
  return ans
}
// @lc code=end
const args = 'ababcbacadefegdehijhklij'
console.log(partitionLabels(args))
