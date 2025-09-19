const array = [52, false, "lean", 51,  NaN, "RR", {n: 5}, true, 24, 12, 44, null, undefined]

const countType = (array) => {
    const typeCounter = {};
    for(element of array){
        const type = typeof element;
        typeCounter[type]  = (typeCounter[type] || 0) +1;
    }
    return typeCounter;
}
console.log(countType(array));