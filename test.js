import { mergeSort } from './lib/sort.js'
function main() {
  const args = [9, 5, 32, 4, 7, 8, 12, 3, 23]
  // const args = [9, 5, 32]
  mergeSort(args, 0, args.length - 1)
  console.log('🚀 ~ main ~ args:', args)
}
main()
