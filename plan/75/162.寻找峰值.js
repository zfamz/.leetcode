/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0,
    r = nums.length - 1
  while (l < r) {
    let mid = (l + r) >> 1
    if (nums[mid] < nums[mid + 1]) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return l
}

// @lc code=end
const args = [1, 2, 1, 3, 5, 6, 4]
console.log(findPeakElement(args))

var findPeakElement_1 = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return i - 1
    }
  }
  return nums.length - 1
}

var findPeakElement_2 = function (nums) {
  const dfs = (arr, l, r) => {
    if (l >= r) {
      return l
    }
    const mid = l + ((r - l) >> 1)
    let val = arr[mid]
    if (val > arr[mid - 1] && val > arr[mid + 1]) {
      return mid
    }
    return arr[mid] > arr[mid + 1] ? dfs(arr, l, mid - 1) : dfs(arr, mid + 1, r)
  }
  return dfs(nums, 0, nums.length - 1)
}
