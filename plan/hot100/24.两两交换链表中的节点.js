/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  if (!head || !head.next) return head
  let n = head.next
  let other = n.next
  n.next = head
  head.next = swapPairs(other)
  return n
}
// @lc code=end
import { gNL } from '../../lib/listnode.js'
const args = [1, 2, 3, 4]
console.log(swapPairs(gNL(args)))
