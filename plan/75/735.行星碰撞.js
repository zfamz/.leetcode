/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let ans = []
  function put(num) {
    let len = ans.length
    let l = ans[len - 1]
    let l_d = l > 0
    if (!len || !l_d) {
      ans.push(num)
      return
    }
    let r = num
    let r_d = r > 0
    if (l_d === r_d) {
      ans.push(num)
      return
    }
    !l_d && (l = -l)
    !r_d && (r = -r)
    if (l === r) {
      ans.pop()
    } else if (r > l) {
      ans.pop()
      put(num)
    }
  }
  for (const star of asteroids) {
    put(star)
  }
  return ans
}
// @lc code=end

console.log(asteroidCollision([-2, -1, 1, 2]))
