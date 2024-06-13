/*
 * @lc app=leetcode.cn id=2813 lang=javascript
 *
 * [2813] 子序列最大优雅度
 */

// @lc code=start
/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
var findMaximumElegance = function (items, k) {
  items.sort((a, b) => b[0] - a[0])
  let ans = 0
  let sum = 0
  let set = new Set()
  let dup = []
  for (let i = 0; i < items.length; i++) {
    let [profit, type] = items[i]
    if (i < k) {
      sum += profit
      if (set.has(type)) {
        dup.push(profit)
      } else {
        set.add(type)
      }
    } else {
      if (dup.length > 0 && !set.has(type)) {
        sum = sum - dup.pop() + profit
        set.add(type)
      }
    }

    ans = Math.max(ans, sum + set.size * set.size)
  }

  return ans
}
// @lc code=end
const args = [
  [
    [3, 2],
    [5, 1],
    [10, 1],
  ],
  2,
]
console.log(findMaximumElegance(...args))

// 回溯 timeout
var findMaximumElegance_1 = function (items, k) {
  let ans = 0

  let s = new Set()
  const backtrack = (nums, start, count, sum = 0, size = 0) => {
    if (count === k) {
      sum = sum + size * size
      ans = Math.max(ans, sum)
      return
    }
    for (let i = start; i < nums.length; i++) {
      let num = nums[i]
      let _size = size
      let isExist = s.has(num[1])
      if (!isExist) {
        s.add(num[1])
        _size += 1
      }
      backtrack(nums, i + 1, count + 1, sum + num[0], _size)
      if (!isExist) {
        s.delete(num[1])
      }
    }
  }
  backtrack(items, 0, 0)

  return ans
}
