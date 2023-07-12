/*
 * @lc app=leetcode.cn id=2095 lang=javascript
 *
 * [2095] 删除链表的中间节点
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
var deleteMiddle = function (head) {
  if (!head.next) {
    return null
  }
  let slow = head
  let fast = slow.next
  while (fast) {
    if (!fast.next || !fast.next.next) {
      slow.next = slow.next.next
      break
    }
    fast = fast.next.next
    slow = slow.next
  }

  return head
}
// @lc code=end

var deleteMiddle_ = function (head) {
  if (!head.next) {
    return null
  }
  let len = 0
  let cur = head
  while (cur) {
    len++
    cur = cur.next
  }
  let mid = len >> 1
  cur = head
  while (mid > 1) {
    mid--
    cur = cur.next
  }
  cur.next && (cur.next = cur.next.next)
  return head
}
