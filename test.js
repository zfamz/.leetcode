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

// Output:
// "obj.color = red"
