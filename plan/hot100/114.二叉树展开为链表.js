/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return root
  console.log('🚀 ~ flatten ~ root:', root)
  const dfs = (node) => {
    if (!node) return
    const { left, right } = node
    dfs(left)
    dfs(right)
    if (left) {
      node.left = null
      node.right = left
      let cur = left
      while (cur.right) {
        cur = cur.right
      }
      cur.right = right
    }
  }
  dfs(root)
  return root
}
// @lc code=end
import { gTree } from '../../lib/tree.js'
const args = [1, 2, 5, 3, 4, null, 6]
console.log(flatten(gTree(args)))

// 把左边节点放在右边
var flatten_2 = function (root) {
  if (!root) return root
  const dfs = (node) => {
    while (node) {
      let { left, right } = node
      if (left) {
        let cur = left
        while (cur.right) {
          cur = cur.right
        }
        node.left = null
        node.right = left
        cur.right = right
      } else {
        node = node.right
      }
    }
  }
  dfs(root)
  return root
}

// 栈
var flatten_1 = function (root) {
  if (!root) return root
  let queue = []
  const dfs = (node) => {
    if (!node) return
    queue.push(node)
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  let len = queue.length - 1
  for (let i = 0; i < len; i++) {
    queue[i].left = null
    queue[i].right = queue[i + 1]
  }
  queue[len].left = null
  queue[len].right = null

  return root
}
