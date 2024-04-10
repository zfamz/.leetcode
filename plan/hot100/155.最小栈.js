/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function () {
  this.stack = []
  this.min_stack = [Infinity]
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  if (val <= this.getMin()) {
    this.min_stack.push(val)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length) {
    const _val = this.stack.pop()
    if (_val === this.min_stack[this.min_stack.length - 1]) {
      this.min_stack.pop()
    }
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stack.length) {
    return this.min_stack[this.min_stack.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
