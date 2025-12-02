const removeElements = (array, ...items) => {
    for(const item of items) {
      const index = array.indexOf(item)
      if(index !== -1) array.splice(index, 1)
    }
};

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array1, 1, 2, 3);
console.log(array1);

const array2 = ['Kyiv', 'Vilnius', 'Tallinn', 'Riga'];
removeElements(array2, 'Vilnius', 'Riga');
console.log(array2);