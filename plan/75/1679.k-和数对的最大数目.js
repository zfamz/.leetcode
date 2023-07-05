/*
 * @lc app=leetcode.cn id=1679 lang=javascript
 *
 * [1679] K 和数对的最大数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let map = {}
  let res = 0
  for (let num of nums) {
    if (map[num] > 0) {
      map[num] = map[num] - 1
      res += 1
    } else {
      let find = k - num
      if (find > 0) {
        map[find] = (map[find] || 0) + 1
      }
    }
  }
  return res
}
// @lc code=end

console.log(maxOperations([3, 1, 3, 4, 3, 3], 6))

var maxOperations_ = function (nums, k) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    let find = k - nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (find === nums[j]) {
        nums[j] = nums[++i]
        nums[i] = find
        res++
        break
      }
    }
  }
  return res
}
