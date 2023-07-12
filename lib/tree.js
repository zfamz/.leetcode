class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function gTree(arr) {
  const root = new TreeNode(arr[0])
  let queue = [root]
  for (let i = 1; i < arr.length; ) {
    const node = queue.shift()
    let left = arr[i++]
    if (left) {
      node.left = new TreeNode(left)
      queue.push(node.left)
    }
    let right = arr[i++]
    if (right) {
      node.right = new TreeNode(right)
      queue.push(node.right)
    }
  }

  return root
}

export function toArr(root) {
  const arr = []
  const getTree = (root) => {
    arr.push(root.val)
    root.left && getTree(root.left)
    root.right && getTree(root.right)
  }
  getTree(root)
  return arr
}
