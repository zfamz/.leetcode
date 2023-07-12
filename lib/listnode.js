export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

export function gNL(arr) {
  const _arr = arr.map((item) => {
    return new ListNode(item)
  })
  let N = _arr.length - 1
  for (let i = 0; i < N; i++) {
    _arr[i].next = _arr[i + 1]
  }
  return _arr[0]
}

export function showNL(head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr
}
