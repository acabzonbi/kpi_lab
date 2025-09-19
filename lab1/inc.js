
let number = 5
const inc = (x) => ++x
let incNumber = inc(number)
console.dir({number, incNumber})


let num = {n: 15}
const inc2 = (obj) => {obj.n++}
inc2(num)
console.dir(num)