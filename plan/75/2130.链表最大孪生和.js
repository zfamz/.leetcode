/*
 * @lc app=leetcode.cn id=2130 lang=javascript
 *
 * [2130] 链表最大孪生和
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
 * @return {number}
 */
var pairSum = function (head) {
  let slow = head
  let fast = slow.next
  while (fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let cur = slow.next
  let prev = null
  while (cur) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  let max = 0
  prev = head
  cur = fast
  while (cur) {
    let sum = cur.val + prev.val
    max = Math.max(sum, max)
    cur = cur.next
    prev = prev.next
  }

  return max
}
// @lc code=end

import { gNL, showNL } from './lib/listnode.js'

console.log(pairSum(gNL([2, 3, 4, 9, 11, 1])))

function pairSum_(head) {
  let arr = []
  let cur = head
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }
  let i = 0,
    j = arr.length - 1,
    max = 0

  while (i < j) {
    let sum = arr[i] + arr[j]
    max = Math.max(max, sum)
    i++
    j--
  }

  return max
}
