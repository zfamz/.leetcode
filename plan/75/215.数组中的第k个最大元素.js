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
  const siftDown = (arr, index, len) => {
    const left = index * 2 + 1
    const right = index * 2 + 2
    let largest = index

    if (left < len && arr[largest] < arr[left]) {
      largest = left
    }
    if (right < len && arr[largest] < arr[right]) {
      largest = right
    }
    if (largest !== index) {
      ;[arr[largest], arr[index]] = [arr[index], arr[largest]]
      siftDown(arr, largest, len)
    }
  }
  const buildHeap = (arr, len) => {
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      siftDown(arr, i, len)
    }
  }
  const heapSort = (arr) => {
    const len = arr.length

    buildHeap(arr, len)

    for (let i = 1; i < k; i++) {
      ;[arr[0], arr[len - i]] = [arr[len - i], arr[0]]
      siftDown(arr, 0, len - i)
    }
  }
  heapSort(nums)
  return nums[0]
}
// @lc code=end
const args = [3, 2, 1, 5, 6, 4]
console.log(findKthLargest(args, 2))

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
