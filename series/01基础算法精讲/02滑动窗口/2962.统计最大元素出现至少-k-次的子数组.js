/*
 * @lc app=leetcode.cn id=2962 lang=javascript
 *
 * [2962] 统计最大元素出现至少 K 次的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  let ans = 0
  let maxArr = [0, 0]
  for (const num of nums) {
    if (num > maxArr[0]) {
      maxArr[0] = num
      maxArr[1] = 1
    } else if (num === maxArr[0]) {
      maxArr[1]++
    }
  }
  if (maxArr[1] < k) {
    return ans
  }

  let left = 0
  let count = 0
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === maxArr[0]) {
      count++
    }
    while (count === k) {
      if (nums[left] === maxArr[0]) {
        count--
      }
      left++
    }
    // 关键一步
    ans += left
  }

  return ans
}
// @lc code=end
const args = [[1, 3, 2, 3, 3], 2]
console.log(countSubarrays(...args))
