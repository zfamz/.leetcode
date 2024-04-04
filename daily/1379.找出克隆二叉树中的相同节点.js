/*
 * @lc app=leetcode.cn id=1379 lang=javascript
 *
 * [1379] 找出克隆二叉树中的相同节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  let ans
  let hit = false
  const dfs = (node1, node2) => {
    if (!node1 || hit) return
    if (node1 === target) {
      hit = true
      ans = node2
    }
    node1.left && dfs(node1.left, node2.left)
    node1.right && dfs(node1.right, node2.right)
  }
  dfs(original, cloned)
  return ans
}
// @lc code=end
