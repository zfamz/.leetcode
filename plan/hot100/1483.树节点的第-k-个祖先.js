/*
 * @lc app=leetcode.cn id=1483 lang=javascript
 *
 * [1483] 树节点的第 K 个祖先
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function (n, parent) {
  const m = Math.ceil(Math.log2(5 * 10 ** 4))
  const pa = Array.from({ length: n }, () => new Array(m).fill(-1))
  for (let i = 0; i < parent.length; i++) {
    pa[i][0] = parent[i]
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let p = pa[j][i - 1]
      pa[j][i] = p < 0 ? -1 : pa[p][i - 1]
    }
  }
  this.pa = pa
}

/**
 * @param {number} node
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function (node, k) {
  let count = 0
  while (k > 0 && node > -1) {
    if (k & 1) {
      node = this.pa[node][count]
    }
    count++
    k = k >> 1
  }
  return node
}

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
// @lc code=end
let treeAncestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2])

// console.log(treeAncestor.getKthAncestor(3, 1)) // 返回 1 ，它是 3 的父节点
console.log(treeAncestor.getKthAncestor(5, 2)) // 返回 0 ，它是 5 的祖父节点
// console.log(treeAncestor.getKthAncestor(6, 3)) // 返回 -1 因为不存在满足要求的祖先节点
