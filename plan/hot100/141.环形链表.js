/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let sp = (fp = head)
  do {
    if (!fp || !fp.next) {
      return false
    }
    sp = sp.next
    fp = fp.next.next
  } while (sp !== fp)
  return true
}
// @lc code=end
var hasCycle_1 = function (head) {
  let set = new Set()
  while (head) {
    if (set.has(head)) {
      return true
    } else {
      set.add(head)
      head = head.next
    }
  }

  return false
}
