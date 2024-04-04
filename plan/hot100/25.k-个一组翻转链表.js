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
  const reverse = (node, k) => {
    if (!node) return node
    let pre = null
    let cur = node
    let i = 0
    while (i < k) {
      if (!cur) {
        return reverse(pre, i)
      }
      let tmp = cur.next
      cur.next = pre
      pre = cur
      cur = tmp
      i++
    }
    node.next = reverse(cur, k)
    return pre
  }

  // let ans = reverse(head, k)
  // console.log(showNL(ans))
  return reverse(head, k)
}
// @lc code=end
import { gNL, showNL } from '../../lib/listnode.js'
const args = [1, 2, 3, 4, 5]
console.log(reverseKGroup(gNL(args), 3))
