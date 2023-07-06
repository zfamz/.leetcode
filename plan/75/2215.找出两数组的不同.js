/*
 * @lc app=leetcode.cn id=2215 lang=javascript
 *
 * [2215] 找出两数组的不同
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  for (const num of set1) {
    if (set2.has(num)) {
      set1.delete(num)
      set2.delete(num)
    }
  }
  return [[...set1], [...set2]]
}
// @lc code=end

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]))
