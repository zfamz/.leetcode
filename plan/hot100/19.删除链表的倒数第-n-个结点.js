/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head
  let cur = head
  let i = 0
  while (i < n) {
    fast = fast.next
    i++
  }
  if (!fast) {
    return cur.next
  }

  while (fast.next) {
    cur = cur.next
    fast = fast.next
  }
  cur.next = cur.next.next

  // console.log(showNL(head))
  return head
}
// @lc code=end
import { gNL, showNL } from '../../lib/listnode.js'
// const args = [[1, 2, 3, 4, 5], 5]
const args = [[1, 2], 1]
console.log(removeNthFromEnd(gNL(args[0]), args[1]))
