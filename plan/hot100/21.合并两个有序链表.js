/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let p1 = list1
  let p2 = list2
  let dump = new ListNode()
  let cur = dump
  while (p1 !== null && p2 !== null) {
    if (p1.val >= p2.val) {
      cur.next = p2
      p2 = p2.next
    } else {
      cur.next = p1
      p1 = p1.next
    }
    cur = cur.next
  }
  cur.next = p1 ? p1 : p2

  // console.log(showNL(dump))
  return dump.next
}
// @lc code=end
import { gNL, ListNode, showNL } from '../../lib/listnode.js'
const args = [
  [1, 2, 4],
  [1, 3, 4],
]
console.log(mergeTwoLists(gNL(args[0]), gNL(args[1])))
