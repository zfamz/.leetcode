/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummy = new ListNode(0, head)
  let n = 0
  let cur = head
  while (cur) {
    n++
    cur = cur.next
  }
  let p0 = dummy

  let prev = null
  cur = p0.next
  while (n >= k) {
    for (let i = 0; i < k; i++) {
      let t = cur.next
      cur.next = prev
      prev = cur
      cur = t
    }
    n -= k
    let t = p0.next
    p0.next.next = cur
    p0.next = prev
    p0 = t
  }

  return dummy.next
}
// @lc code=end
import { gNL, ListNode } from '../../../lib/listnode.js'
// const args = [gNL([1, 2, 3, 4, 5]), 2]
const args = [gNL([1, 2]), 2]
console.log(reverseKGroup(...args))
