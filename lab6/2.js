const handlers = []
const pipe = (...fns) => {
    if (fns.some((arg) => typeof arg !== 'function')) {throw 'Arguments must be funtcions'}
    const catcher = (x) => {
        try {
            res = fns.reduce((f1, f2) => f2(f1), x)
            return res
        } catch (error) {
            for (const handler of handlers) {
                handler(error);
            }
            return undefined
        }
    }
    return catcher
};
pipe.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
}

const inc = x => x++;
const twice = x => { throw '-' };
const cube = x => x ** 3;

const func = pipe(inc, twice, cube);
const func2 = pipe(inc, cube);

pipe.on('error', (error) => {console.log('working?', error)});

console.log(func(1))
console.log(func2(10))