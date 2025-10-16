const average = (a,b) => {return ((a+b)/2)}


const square = (x) => {return (x*x)}


const cube = (x) => {return (x*x*x)}


const calculate = (start, end) =>{
    let res = []
    for(a = start; a<=end; a++){
        res.push(average(square(a),cube(a)))
    }
    return res
}
console.dir(calculate(0,9))