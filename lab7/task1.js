const removeElement = (array, item) => {
    const index = array.indexOf(item)
    if(index !== -1) {array.splice(index, 1)}
};
  
const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array1, 1);
console.log(array1);

const array2 = ['Kyiv', 'Vilnius', 'Tallinn', 'Riga'];
removeElement(array2, 'Vilnius');
removeElement(array2, 'Warsaw');
console.log(array2);