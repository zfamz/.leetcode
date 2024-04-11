/*
 * @lc app=leetcode.cn id=1766 lang=javascript
 *
 * [1766] 互质树
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number[]}
 */
var getCoprimes = function (nums, edges) {
  const cache = new Map()
  const getKey = (a, b) => {
    return `${a}:${b}`
  }
  const gcd = (a, b) => {
    const key = getKey(a, b)
    if (cache.has(key)) {
      return cache.get(key)
    }
    const r = b ? gcd(b, a % b) : a
    cache.set(key, r)
    return r
  }

  let m = nums.length
  const ans = new Array(m).fill(-1)
  const vet = Array.from({ length: m }, () => [])

  for (const [a, b] of edges) {
    vet[a].push(b)
    vet[b].push(a)
  }

  const dfs = (node, visited, map, path) => {
    visited.add(node)
    let e = vet[node]
    let _val = nums[node]

    let j = path.length - 1
    for (; j >= 0; j--) {
      let val = path[j]
      if (gcd(val, _val) === 1) {
        ans[node] = map.get(val)
        break
      }
    }

    let isExist = map.has(_val)
    let oldIndex = isExist ? map.get(_val) : null
    map.set(_val, node)
    let _path = path.slice()
    if (isExist) {
      let _i = _path.indexOf(_val)
      _path.splice(_i, 1)
    }
    _path.push(_val)
    for (const item of e) {
      if (!visited.has(item)) {
        dfs(item, visited, map, _path)
      }
    }
    if (isExist) {
      map.set(_val, oldIndex)
    } else {
      map.delete(_val)
    }
  }
  dfs(0, new Set(), new Map(), [])
  return ans
}
// @lc code=end
const args = [
  [2, 3, 3, 2],
  [
    [0, 1],
    [1, 2],
    [1, 3],
  ],
]
const args1 = [
  [
    9, 16, 30, 23, 33, 35, 9, 47, 39, 46, 16, 38, 5, 49, 21, 44, 17, 1, 6, 37, 49, 15, 23, 46, 38, 9, 27, 3, 24, 1, 14,
    17, 12, 23, 43, 38, 12, 4, 8, 17, 11, 18, 26, 22, 49, 14, 9,
  ],
  [
    [17, 0],
    [30, 17],
    [41, 30],
    [10, 30],
    [13, 10],
    [7, 13],
    [6, 7],
    [45, 10],
    [2, 10],
    [14, 2],
    [40, 14],
    [28, 40],
    [29, 40],
    [8, 29],
    [15, 29],
    [26, 15],
    [23, 40],
    [19, 23],
    [34, 19],
    [18, 23],
    [42, 18],
    [5, 42],
    [32, 5],
    [16, 32],
    [35, 14],
    [25, 35],
    [43, 25],
    [3, 43],
    [36, 25],
    [38, 36],
    [27, 38],
    [24, 36],
    [31, 24],
    [11, 31],
    [39, 24],
    [12, 39],
    [20, 12],
    [22, 12],
    [21, 39],
    [1, 21],
    [33, 1],
    [37, 1],
    [44, 37],
    [9, 44],
    [46, 2],
    [4, 46],
  ],
]
console.log(getCoprimes(...args1))
