/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const search = (t) => {
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
      let mid = l + ((r - l) >> 1)
      if (nums[mid] < t) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    return l
  }

  let start = search(target)
  if (nums[start] !== target) {
    return [-1, -1]
  }

  return [start, search(target + 1) - 1]
}
// @lc code=end
const args = [[5, 7, 7, 8, 8, 10], 8]
console.log(searchRange(...args))
