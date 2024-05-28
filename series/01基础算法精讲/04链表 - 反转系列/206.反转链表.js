/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const dfs = (cur, pre) => {
    if (!cur) return pre
    const res = dfs(cur.next, cur)
    cur.next = pre
    return res
  }
  return dfs(head, null)
}
// @lc code=end
import { gNL } from '../../../lib/listnode.js'
const args = gNL([1, 2, 3, 4, 5])
console.log(reverseList(args))

var reverseList = function (head) {
  let prev = null
  let next = head
  while (next) {
    let temp = next.next
    next.next = prev
    prev = next
    next = temp
  }

  return prev
}

var reverseList_2 = function (head) {
  if (!head || !head.next) return head
  let ans = null
  const dfs = (node) => {
    if (!node.next) {
      ans = node
      return node
    }
    let next = dfs(node.next)
    next.next = node
    return node
  }

  dfs(head)

  head.next = null

  return ans
}

var reverseList_3 = function (head) {
  if (!head || !head.next) return head
  let node = reverseList(head.next)
  head.next.next = head
  head.next = null
  return node
}
