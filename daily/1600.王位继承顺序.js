/*
 * @lc app=leetcode.cn id=1600 lang=javascript
 *
 * [1600] 王位继承顺序
 */

// @lc code=start
/**
 * @param {string} kingName
 */
var ThroneInheritance = function (kingName) {
  this.death_set = new Set()
  this.king = kingName
  this.map = {}
  this.map[kingName] = []
}

/**
 * @param {string} parentName
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function (parentName, childName) {
  if (!(parentName in this.map)) {
    this.map[parentName] = []
  }
  this.map[parentName].push(childName)
}

/**
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function (name) {
  this.death_set.add(name)
}

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function () {
  const ans = []
  const dfs = (name) => {
    ans.push(name)
    const children = this.map[name]
    if (children && children.length) {
      for (const child of children) {
        dfs(child)
      }
    }
  }
  dfs(this.king)
  return ans.filter((name) => !this.death_set.has(name))
}

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
// @lc code=end
const t = new ThroneInheritance('king') // 继承顺序：king
t.birth('king', 'andy') // 继承顺序：king > andy
t.birth('king', 'bob') // 继承顺序：king > andy > bob
t.birth('king', 'catherine') // 继承顺序：king > andy > bob > catherine
t.birth('andy', 'matthew') // 继承顺序：king > andy > matthew > bob > catherine
t.birth('bob', 'alex') // 继承顺序：king > andy > matthew > bob > alex > catherine
t.birth('bob', 'asha') // 继承顺序：king > andy > matthew > bob > alex > asha > catherine
console.log(t.getInheritanceOrder()) // 返回 ["king", "andy", "matthew", "bob", "alex", "asha", "catherine"]
t.death('bob') // 继承顺序：king > andy > matthew > bob（已经去世）> alex > asha > catherine
console.log(t.getInheritanceOrder()) // 返回 ["king", "andy", "matthew", "alex", "asha", "catherine"]
