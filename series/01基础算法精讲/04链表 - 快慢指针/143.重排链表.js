/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let prev = null
  let cur = slow
  while (cur) {
    let t = cur.next
    cur.next = prev
    prev = cur
    cur = t
  }

  let head2 = prev
  let dummy = new ListNode(0, head)
  while (head2.next) {
    let head_next = head.next
    let head2_next = head2.next
    head.next = head2
    head2.next = head_next
    head = head_next
    head2 = head2_next
  }

  return dummy.next
}
// @lc code=end
import { gNL, ListNode } from '../../../lib/listnode.js'
const args = gNL([1, 2, 3, 4, 5])
console.log(reorderList(args))
