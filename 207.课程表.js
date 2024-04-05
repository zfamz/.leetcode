/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let map = new Map()
  let flag = new Array(numCourses).fill(0)
  for (const [a, b] of prerequisites) {
    if (map.has(b)) {
      map.get(b).push(a)
    } else {
      map.set(b, [a])
    }
  }

  const dfs = (vet, edge) => {
    if (flag[vet] === 1) return true
    if (flag[vet] === -1) return false
    flag[vet] = 1
    for (const _vet of edge) {
      if (map.has(_vet)) {
        if (dfs(_vet, map.get(_vet))) {
          return true
        }
      } else {
        flag[_vet] = -1
      }
    }
    flag[vet] = -1
    return false
  }

  for (const [vet, edge] of map) {
    if (dfs(vet, edge)) {
      return false
    }
  }
  return true
}
// @lc code=end
const args = [
  [1, 0],
  [1, 2],
  [0, 1],
]
console.log(canFinish(3, args))

// BFS
var canFinish_1 = function (numCourses, prerequisites) {
  let map = new Map()
  let inDegree = new Array(numCourses).fill(0)

  for (const [a, b] of prerequisites) {
    inDegree[a]++
    if (map.has(b)) {
      map.get(b).push(a)
    } else {
      map.set(b, [a])
    }
  }
  let queue = []
  inDegree.forEach((item, i) => {
    if (item === 0) {
      queue.push(i)
    }
  })

  let count = 0
  while (queue.length) {
    let vet = queue.shift()
    count++
    let to = map.get(vet)
    if (!to || !to.length) continue
    for (const _vet of to) {
      inDegree[_vet]--
      if (inDegree[_vet] === 0) {
        queue.push(_vet)
      }
    }
  }

  return count === numCourses
}
