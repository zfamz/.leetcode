/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
  if (!head) return head
  const arr = []
  let cur = head
  while (cur) {
    arr.push(cur)
    cur = cur.next
  }
  arr.sort((a, b) => {
    return a.val - b.val
  })
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1]
  }
  arr[arr.length - 1].next = null
  return arr[0]
}
// @lc code=end
import { gNL } from '../../lib/listnode.js'
const args = [4, 2, 1, 3]
console.log(sortList(gNL(args)))
