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
  const dummy = new ListNode(0, head)
  let fast = dummy
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  let slow = dummy
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return dummy.next
}
// @lc code=end

var removeNthFromEnd_1 = function (head, n) {
  let len = 0
  let cur = head
  while (cur) {
    len++
    cur = cur.next
  }
  if (len === n) {
    return head.next
  }
  len = len - n - 1
  cur = head
  while (len > 0) {
    len--
    cur = cur.next
  }
  cur.next = cur.next ? cur.next.next : cur.next

  return head
}
