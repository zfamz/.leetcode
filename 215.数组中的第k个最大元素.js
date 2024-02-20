/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
  let len = nums.length
  const quickSelect = (arr, start, end) => {
    if (start >= end) return

    let l = start
    let r = end
    let x = arr[l]

    while (l < r) {
      while (l < r && arr[r] >= x) r--
      while (l < r && arr[l] <= x) l++
      if (l < r) {
        let temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
      }
    }
    arr[start] = arr[r]
    arr[r] = x

    let diff = len - l - k
    if (diff === 0) return
    diff > 0 ? quickSelect(arr, l + 1, end) : quickSelect(arr, start, l - 1)
  }
  quickSelect(nums, 0, nums.length - 1)
  return nums[len - k]
}
// @lc code=end
const args = [5, 2, 4, 1, 3, 6, 0]
console.log(findKthLargest(args, 4))

// 最后一个用例超时
var findKthLargest_1 = function (nums, k) {
  let len = nums.length
  const quickSelect = (arr, start, end) => {
    if (start >= end) return

    let l = start
    let r = end
    let x = arr[l]

    while (l < r) {
      while (l < r && arr[r] >= x) r--
      while (l < r && arr[l] <= x) l++
      if (l < r) {
        let temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
      }
    }
    arr[start] = arr[r]
    arr[r] = x

    let diff = len - l - k
    if (diff === 0) return
    diff > 0 ? quickSelect(arr, l + 1, end) : quickSelect(arr, start, l - 1)
  }
  quickSelect(nums, 0, nums.length - 1)
  return nums[len - k]
}
