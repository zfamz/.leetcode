/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let n = nums.length
  let queue = [nums[n - 1]]
  let ans = new Array(n).fill(NaN)

  let miss = []
  for (let i = n - 1; i >= 0; i--) {
    let num = nums[i]
    if (num >= queue[queue.length - 1]) {
      queue = [num]
      miss.push(i)
      continue
    }
    while (num >= queue[0]) {
      queue.shift()
    }
    ans[i] = queue[0]
    queue.unshift(num)
  }
  for (let i = 0; i < miss.length; i++) {
    let index = miss[i]
    let num = nums[index]
    while (num >= queue[0]) {
      queue.shift()
    }

    ans[index] = queue.length ? queue[0] : -1
  }

  return ans
}
// @lc code=end
const args = [1, 2, 3, 2, 1] // [2,3,-1,3,2]
console.log(nextGreaterElements(args))
