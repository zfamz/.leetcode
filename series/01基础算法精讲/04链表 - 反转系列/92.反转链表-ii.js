/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dump = new ListNode(0, head)
  let p0 = dump
  for (let i = 1; i < left; i++) {
    p0 = p0.next
  }
  let cur = p0.next
  let prev = null
  for (let i = left; i <= right; i++) {
    let t = cur.next
    cur.next = prev
    prev = cur
    cur = t
  }

  p0.next.next = cur
  p0.next = prev

  return dump.next
}
// @lc code=end
import { gNL, ListNode } from '../../../lib/listnode.js'
const args = [gNL([1, 2, 3, 4, 5]), 2, 4]
// const args = [gNL([5]), 2, 4]
console.log(reverseBetween(...args))

var reverseBetween_1 = function (head, left, right) {
  let left_node = null
  let right_node = null
  let cur = head
  let prev = null
  let index = 1
  while (cur) {
    if (index === left - 1) {
      prev = cur
    } else if (index === left) {
      left_node = cur
    } else if (index === right) {
      right_node = cur
    }
    index++
    cur = cur.next
  }
  if (!right_node) return head
  if (!prev) {
    head = right_node
  } else {
    prev.next = right_node
  }

  prev = right_node.next
  cur = left_node
  while (true) {
    let t = cur.next
    cur.next = prev
    prev = cur
    cur = t
    if (prev === right_node) {
      break
    }
  }

  return head
}
