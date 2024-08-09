/*
 * @lc app=leetcode.cn id=3132 lang=javascript
 *
 * [3132] 找出与数组相加的整数 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let index = 2
  while (index >= 0) {
    let x = nums2[0] - nums1[index]
    let k = 0
    for (let i = index; i < nums1.length; i++) {
      if (nums1[i] + x === nums2[k]) {
        k++
      }
    }
    if (k === nums2.length) {
      return x
    }
    index--
  }
}
// @lc code=end
const args = [
  [4, 20, 16, 12, 8],
  [14, 18, 10],
]
console.log(minimumAddedInteger(...args))
