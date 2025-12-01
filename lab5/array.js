function array(){
    const data = []
    const index = (i) => data[i]
    index.push = (smth) => data.push(smth)
    index.pop = () => data.pop()
    return index
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());