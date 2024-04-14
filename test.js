import { mergeSort } from './lib/sort.js'
function main() {
  const args = [9, 5, 32, 4, 7, 8, 12, 3, 23]
  // const args = [9, 5, 32]
  mergeSort(args, 0, args.length - 1)
  console.log('🚀 ~ main ~ args:', args)
}
var minimumTime = function (n, edges, disappear) {
  let ans = new Array(n).fill(-1)
  ans[0] = 0
  let map = Array.from({ length: n }, () => ({}))
  for (let [i, j, len] of edges) {
    if (i !== j) {
      if (map[i][j]) {
        len = Math.min(map[i][j], len)
      }
      map[i][j] = len
      map[j][i] = len
    }
  }
  const dfs = (node, useTime, visited) => {
    if (visited.has(node)) return
    visited.add(node)
    let vs = Object.keys(map[node])
    for (const v of vs) {
      if (visited.has(v)) continue
      let len = map[node][v]
      let t = useTime + len
      if (t < disappear[v]) {
        if (ans[v] === -1) {
          ans[v] = t
        } else {
          ans[v] = Math.min(ans[v], t)
        }
        dfs(v, ans[v], visited)
      }
    }
  }

  dfs(0, 0, new Set())

  return ans
}
const args = [
  3,
  [
    [2, 0, 9],
    [1, 0, 5],
    [2, 2, 4],
    [0, 1, 10],
    [1, 1, 10],
    [1, 1, 10],
    [2, 2, 10],
    [1, 1, 10],
  ],
  [4, 13, 19],
]
// console.log(minimumTime(...args))

var numberOfSubarrays = function (nums) {
  let arr = []
  let cur = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (cur !== nums[i]) {
      arr.push(sum)
      cur = nums[i]
      sum = 1
    } else {
      sum++
    }
  }
  if (sum > 0) {
    arr.push(sum)
  }
  let cache = [0, 1]
  const dfs = (n) => {
    if (cache[n] !== undefined) {
      return cache[n]
    }
    cache[n] = n + dfs(n - 1)
    return cache[n]
  }
  let ans = 0
  console.log(arr)
  for (const num of arr) {
    ans += dfs(num)
  }
  return ans
}
console.log(numberOfSubarrays([1, 4, 3, 3, 2]))
console.log(numberOfSubarrays([3, 3, 3]))
