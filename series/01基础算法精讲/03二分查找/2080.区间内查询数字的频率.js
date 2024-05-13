/*
 * @lc app=leetcode.cn id=2080 lang=javascript
 *
 * [2080] 区间内查询数字的频率
 */

// @lc code=start
/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function (arr) {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (num in map) {
      map[num].push(i)
    } else {
      map[num] = [i]
    }
  }
  this.map = map
}

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const lowerbound = (arr, target) => {
  let l = 0
  let r = arr.length - 1
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (arr[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return l
}

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function (left, right, value) {
  let arr = this.map[value]
  if (!arr) return 0
  let l = lowerbound(arr, left)
  let r = lowerbound(arr, right + 1)
  return r - l
}

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */
// @lc code=end
