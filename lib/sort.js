function quickSort(arr, start, end) {
  if (start > end) return
  let l = start
  let r = end
  let x = arr[l]
  while (l < r) {
    while (r > l && arr[r] >= x) r--
    if (r > l) {
      arr[l] = arr[r]
      l++
    }
    while (r > l && arr[l] <= x) l++
    if (r > l) {
      arr[r] = arr[l]
      r--
    }
  }
  arr[l] = x
  quickSort(arr, start, l - 1)
  quickSort(arr, l + 1, end)
}

function quickSort_1(arr, start, end) {
  if (start >= end) {
    return
  }
  let l = start
  let r = end
  let x = arr[l]

  while (l < r) {
    while (l < r && arr[r] >= x) r--
    while (l < r && arr[l] <= x) l++
    if (l < r) {
      let temp = arr[l]
      arr[l] = arr[r]
      arr[r] = temp
    }
  }
  arr[start] = arr[r]
  arr[r] = x
  quickSort(arr, start, l - 1)
  quickSort(arr, l + 1, end)
}
