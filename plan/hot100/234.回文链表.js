/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let arr = []
  let node = head
  while (node) {
    arr.push(node.val)
    node = node.next
  }
  let m = arr.length
  let end = m >> 1
  for (let i = 0; i < end; i++) {
    if (arr[i] !== arr[m - 1 - i]) {
      return false
    }
  }

  return true
}
// @lc code=end
import { gNL } from '../../lib/listnode.js'
const args = [1, 2, 2, 1]
console.log(isPalindrome(gNL(args)))
