/*
 * @lc app=leetcode.cn id=1636 lang=javascript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const countMap = {}
  nums.forEach((item) => {
    const count = countMap[item]
    if (count) {
      countMap[item] = count + 1
    } else {
      countMap[item] = 1
    }
  })
  let arr = Object.keys(countMap).sort((a, b) => {
    const result = countMap[a] - countMap[b]
    if (result === 0 && a - b > 0) {
      return -1
    }
    return result
  })
  return arr.reduce((a, b) => {
    return a.concat(new Array(countMap[b]).fill(b))
  }, [])
}

// @lc code=end
