/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) {
    return head
  }
  let odd = head
  let even_head = odd.next
  let even = even_head
  let cur = even.next
  while (cur) {
    odd.next = cur
    odd = cur
    cur = cur.next
    if (cur) {
      even.next = cur
      even = cur
      cur = cur.next
    }
  }
  even.next = null
  odd.next = even_head
  return head
}
// @lc code=end

import { gNL, showNL } from '../../lib/listnode.js'

console.log(showNL(oddEvenList(gNL([1, 2, 3, 4, 5]))))
