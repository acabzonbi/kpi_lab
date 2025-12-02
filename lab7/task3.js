const unique = (array) => {
    let res = [];
    for (const item of array) {
        if (!res.includes(item)) {
            res.push(item);
        }
    }
    return res;
}

const result = unique([2, 1, 1, 3, 2, 3, 1, 4]);
console.log(result);

const result1 = unique(['top', 'bottom', 'top', 'left', 'left', 'bottom']);
console.log(result1);