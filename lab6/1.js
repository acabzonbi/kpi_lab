const pipe = (...fns) => {
    if(fns.some((arg) => typeof arg !=='function')) {throw 'Arguments must be funtcions'}
    res = (x) => fns.reduce((f1, f2) => f2(f1), x)
    return res
}
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
//const f1 = pipe(inc, 7, cube);

console.log(f(5))
//console.log(f1(5))