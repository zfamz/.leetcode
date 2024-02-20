/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const existedKeys = new Array(rooms.length).fill(false)
  existedKeys[0] = true
  const bfs = () => {
    let queue = [0]
    while (queue.length) {
      let key = queue.shift()
      for (const _key of rooms[key]) {
        if (!existedKeys[_key]) {
          queue.push(_key)
          existedKeys[_key] = true
        }
      }
    }
  }
  bfs()
  return existedKeys.every((item) => item)
}
// @lc code=end
const args = [[1, 3], [3, 0, 1], [2], [0]]
console.log(canVisitAllRooms(args))

var canVisitAllRooms_ = function (rooms) {
  const visited = new Array(rooms.length).fill(false)
  const dfs = (key) => {
    if (visited[key]) {
      return
    }
    visited[key] = true
    let _keys = rooms[key]
    for (let index = 0; index < _keys.length; index++) {
      dfs(_keys[index])
    }
  }
  dfs(0)
  return visited.every((item) => item)
}
var canVisitAllRooms_1 = function (rooms) {
  let keys = [0]

  const isNull = (ele) => {
    return ele === null
  }

  while (keys.length) {
    let index = keys.shift()
    let _keys = rooms[index]
    if (isNull(_keys)) {
      continue
    }
    rooms[index] = null
    _keys = _keys.filter((item) => !isNull(item))
    keys.push(..._keys)
  }

  return rooms.every((item) => isNull(item))
}
