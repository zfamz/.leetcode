/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
  const dummy = new ListNode(NaN, head)
  let cur = dummy
  while (cur.next) {
    let end = cur.next
    while (end.next && end.val === end.next.val) {
      end = end.next
    }
    if (cur.next !== end) {
      cur.next = end.next
    } else {
      cur = end
    }
  }

  return dummy.next
}
// @lc code=end
import { gNL, ListNode } from '../../../lib/listnode.js'
const args = gNL([1, 2, 3, 3, 5])
console.log(deleteDuplicates(args))
