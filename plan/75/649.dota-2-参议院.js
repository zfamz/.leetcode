/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let count = 0
  let arr = senate.split('')
  while (true) {
    let _arr = []
    for (let i = 0; i < arr.length; i++) {
      let char = arr[i]
      if (char === 'R') {
        if (count >= 0) {
          _arr.push(char)
        }
        count++
      } else {
        if (count <= 0) {
          _arr.push(char)
        }
        count--
      }
    }
    arr = _arr.filter((item) => {
      if (count > 0 && item === 'D') {
        count--
        return false
      }
      if (count < 0 && item === 'R') {
        count++
        return false
      }
      return true
    })
    if (count > 1) {
      return 'Radiant'
    }
    if (count < -1) {
      return 'Dire'
    }
  }
}
// @lc code=end

console.log(predictPartyVictory('DDRRRR'))
