/*
 * @lc app=leetcode.cn id=1968 lang=javascript
 *
 * [1968] 构造元素不等于两相邻元素平均值的数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  nums.sort((a, b) => a - b)
  let m = nums.length
  let l = 1
  let r = m - (m & 1 ? 1 : 2)
  while (l < r) {
    let tmp = nums[l]
    nums[l] = nums[r]
    nums[r] = tmp
    l += 2
    r -= 2
  }
  return nums
}
// @lc code=end
const args = [1, 2, 3, 4, 5, 6]
console.log(rearrangeArray(args))

var rearrangeArray_2 = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length - 1; i += 2) {
    let tmp = nums[i]
    nums[i] = nums[i + 1]
    nums[i + 1] = tmp
  }
  return nums
}
// 暴力枚举 超时
var rearrangeArray_1 = function (nums) {
  let ans
  const dfs = (arr, path) => {
    if (ans) return
    if (path.length === nums.length) {
      ans = path.slice()
      return
    }
    for (const num of arr) {
      if (!ans && !path.includes(num)) {
        path.push(num)
        let end = path.length - 1
        if (end > 1) {
          if (path[end - 1] * 1 !== num + path[end - 2]) {
            dfs(arr, path)
          }
        } else {
          dfs(arr, path)
        }
        path.pop()
      }
    }
  }
  dfs(nums, [])
  return ans
}
