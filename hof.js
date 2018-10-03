function multiplier(factor) {
  return x => x * factor;
  }


let doubler = multiplier(2);
let tripler = multiplier(3);
console.log(doubler(4))
console.log(tripler(4))
