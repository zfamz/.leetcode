var findKthSmallest = function (coins, k) {
  coins.sort((a, b) => a - b)
  const base = coins.slice()
  let count = 0
  let m = coins.length - 1
  let cur = 0
  let curVal = coins[cur]

  while (count < k) {
    if (curVal <= coins[cur + 1]) {
    }
    coins[cur] += base[cur]
    count++
  }
  return coins[cur]
}
const args = [[3, 6, 9], 3]
console.log(findKthSmallest(...args))
