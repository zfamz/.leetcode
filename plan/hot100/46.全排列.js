/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let m = nums.length
  let ans = []
  const backtrack = (nums, seleted, res) => {
    if (res.length === m) {
      ans.push(res.slice())
      return
    }
    nums.forEach((num, index) => {
      if (!seleted[index]) {
        seleted[index] = true
        res.push(num)
        backtrack(nums, seleted, res)
        seleted[index] = false
        res.pop()
      }
    })
    return
  }
  backtrack(nums, new Array(m).fill(false), [])
  return ans
}
// @lc code=end
const args = [1, 2, 3]
console.log(permute(args))
