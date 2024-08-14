/*
 * @lc app=leetcode.cn id=3152 lang=javascript
 *
 * [3152] 特殊数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  // 前缀和
  let n = nums.length
  let s = new Array(n).fill(0)
  for (let i = 1; i < nums.length; i++) {
    if (((nums[i] ^ nums[i - 1]) & 1) !== 1) {
      s[i] = s[i - 1] + 1
    } else {
      s[i] = s[i - 1]
    }
  }
  return queries.map(([from, to]) => {
    return !(s[to] - s[from])
  })
}
// @lc code=end
const args = [
  [4, 3, 1, 6],
  [
    [0, 2],
    [2, 3],
  ],
]
console.log(isArraySpecial(...args))

// 记录最近的非特殊数组位置
var isArraySpecial_2 = function (nums, queries) {
  let n = nums.length
  let s = new Array(n)
  let pre = (s[0] = -1)
  for (let i = 1; i < nums.length; i++) {
    if (((nums[i] ^ nums[i - 1]) & 1) !== 1) {
      pre = i
    }
    s[i] = pre
  }
  return queries.map(([from, to]) => {
    return s[to] <= from
  })
}

// 二分查找
var isArraySpecial_3 = function (nums, queries) {
  let s = []
  for (let i = 1; i < nums.length; i++) {
    if (((nums[i] ^ nums[i - 1]) & 1) !== 1) {
      s.push(i)
    }
  }
  return queries.map(([from, to]) => {
    let l = 0,
      r = s.length - 1

    while (l <= r) {
      let mid = (r + l) >> 1
      let num = s[mid]
      if (num > to) {
        r = mid - 1
      } else if (num <= from) {
        l = mid + 1
      } else {
        return false
      }
    }

    return true
  })
}
