/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null
  const merge = (l1, l2) => {
    if (!l1) return l2
    let dum = new ListNode()
    let head = dum
    let i = l1,
      j = l2
    while (i && j) {
      if (i.val > j.val) {
        dum.next = j
        j = j.next
      } else {
        dum.next = i
        i = i.next
      }
      dum = dum.next
    }
    if (i) {
      dum.next = i
    }
    if (j) {
      dum.next = j
    }
    return head.next
  }
  const dfs = (l, r) => {
    if (l === r) {
      return lists[l]
    }
    let mid = l + ((r - l) >> 1)
    let left = dfs(l, mid)
    let right = dfs(mid + 1, r)
    return merge(left, right)
  }
  return dfs(0, lists.length - 1)
}
// @lc code=end
import { gNL, ListNode } from '../../lib/listnode.js'
const args = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
]
console.log(mergeKLists(args.map((item) => gNL(item))))

var mergeKLists_1 = function (lists) {
  const merge = (l1, l2) => {
    if (!l1) return l2
    let dum = new ListNode()
    let head = dum
    let i = l1,
      j = l2
    while (i && j) {
      if (i.val > j.val) {
        dum.next = j
        j = j.next
      } else {
        dum.next = i
        i = i.next
      }
      dum = dum.next
    }
    if (i) {
      dum.next = i
    }
    if (j) {
      dum.next = j
    }
    return head.next
  }
  return lists.reduce((a, b) => {
    return merge(a, b)
  }, null)
}
