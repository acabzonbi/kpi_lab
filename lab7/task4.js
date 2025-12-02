const difference = (array1, array2) => {
    const sorted = []
    for(const item of array1) {
        if(!array2.includes(item)) {sorted.push(item)}
    }
    return sorted 
};

const array1 = [7, -2, 10, 5, 0];
const array2 = [7, 10];
const result = difference(array1, array2);
console.log(result);

const array3 = ['Kyiv', 'Vilnius', 'Tallinn', 'Riga'];
const array4 = ['Warsaw', 'Kyiv', 'Riga'];
const result1 = difference(array3, array4);
console.log(result1);