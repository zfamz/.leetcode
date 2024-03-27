/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let ans = []
  let queue = [0]
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i]
    let j = queue.length - 1
    while (j >= 0 && nums[queue[j]] <= val) {
      j--
    }
    queue.length = j + 1
    queue.push(i)
    if (i - queue[0] >= k) {
      queue.shift()
    }
    if (i >= k - 1) {
      ans.push(nums[queue[0]])
    }
  }
  return ans
}
// @lc code=end
const args = [[1, 3, -1, -3, 5, 3, 6, 7], 3]
// const args = [[1, -1], 1]
console.log(maxSlidingWindow(...args))

var maxSlidingWindow_1 = function (nums, k) {
  let i = 0
  let max = -Infinity
  let ans = []
  while (i < k) {
    if (nums[i] > max) {
      max = nums[i]
    }
    i++
  }
  ans.push(max)
  while (i < nums.length) {
    let val = nums[i]
    if (val > max) {
      max = val
    } else {
      let start = i - k
      if (nums[start] === max) {
        start++
        max = val
        while (start < i) {
          max = Math.max(max, nums[start])
          start++
        }
      }
    }
    ans.push(max)
    i++
  }

  return ans
}
