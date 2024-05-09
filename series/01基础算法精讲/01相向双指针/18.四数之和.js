/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const ans = []
  nums.sort((a, b) => a - b)
  let end = nums.length - 1

  for (let a = 0; a < end - 2; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue
    let min = nums[a] + nums[a + 1] + nums[a + 2] + nums[a + 3]
    if (min > target) break
    let max = nums[a] + nums[end] + nums[end - 1] + nums[end - 2]
    if (max < target) continue

    for (let b = a + 1; b < end - 1; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue
      min = nums[a] + nums[b] + nums[b + 1] + nums[b + 2]
      if (min > target) break
      max = nums[a] + nums[b] + nums[end] + nums[end - 1]
      if (max < target) continue

      let c = b + 1
      let d = end
      while (c < d) {
        let s = nums[a] + nums[b] + nums[c] + nums[d]
        if (s > target) {
          d--
        } else if (s < target) {
          c++
        } else {
          ans.push([nums[a], nums[b], nums[c], nums[d]])
          do {
            c++
          } while (c < d && nums[c] === nums[c - 1])
          do {
            d--
          } while (d > c && nums[d] === nums[d + 1])
        }
      }
    }
  }

  return ans
}
// @lc code=end
const args = [[1, 0, -1, 0, -2, 2], 0]
console.log(fourSum(...args))
