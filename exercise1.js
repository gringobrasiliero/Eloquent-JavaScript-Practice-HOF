let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
var result = arrays.reduce(function (previous, current){
  return previous.concat(current)
})

console.log(result)
