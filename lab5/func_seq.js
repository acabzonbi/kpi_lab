function seq(...args) {
    let chains = [...args];
    function next(arg) {
        if (typeof arg === "number") {
            return chains.reduceRight((acc, fn) => fn(acc), arg);
        }
        chains.push(arg);
        return next;
    }
    return next;
}

console.log(seq(x => x + 4)(x => x * 1)(7)); 
console.log(seq(x => x + 1)(x => x * 1)(x => x / 1)(x => x - 1)(1));
console.log(seq(x => x * 8)(x => x + 3)(30));
console.log(seq(x => x * 10)(x => x + 5000)(2));

