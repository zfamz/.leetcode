/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let m = nums.length
  let len = 1 << m
  let ans = []
  for (let i = 0; i < len; i++) {
    let res = []
    let j = 0
    while (j < m) {
      if (i & (1 << j)) {
        res.push(nums[j])
      }
      j++
    }
    ans.push(res)
  }
  return ans
}
// @lc code=end
const args = [1, 2, 3]
console.log(subsets(args))

// 回溯
var subsets = function (nums) {
  const ans = [[]]
  let m = nums.length
  const backtrack = (nums, start, res) => {
    if (start === m) {
      return
    }
    for (let i = start; i < m; i++) {
      res.push(nums[i])
      ans.push(res.slice())
      backtrack(nums, i + 1, res)
      res.pop()
    }
  }
  backtrack(nums, 0, [])
  return ans
}
