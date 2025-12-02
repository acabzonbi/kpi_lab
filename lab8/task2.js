const store = (x) => () => x;

const read = store(10)
const value = read();
console.log(value)