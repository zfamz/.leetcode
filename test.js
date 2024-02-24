var triangle = { z: 9, a: 1, b: 2, c: 3 }

function ColoredTriangle() {
  this.color = 'red'
}

ColoredTriangle.prototype = triangle

var obj = new ColoredTriangle()

for (var prop in obj) {
  console.log(prop)
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`)
  }
}
let i = 0
let arr = [0, 1]
arr.splice(1, 0, 9)
console.log(arr)

// Output:
// "obj.color = red"
