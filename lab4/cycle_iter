const a = (...arg) => {
    let result = 0
    for (let i = 0; i < arg.length; i++) {
        result += arg[i]
    }
    console.log(result)
}

const b = (...arg) => {
    let result = 0
    for (const i of arg) {
        result += i
    }
    console.log(result)
}

const c = (...arg) => {
    let result = 0
    let i = 0
    while (i < arg.length) {
        result += arg[i]
        ++i
    }
    console.log(result)
}

const d = (...arg) => {
    let result = 0
    let i = 0
    if (arg.length === 0) {
        console.log(0)
        return
    }
    do {
        result += arg[i]
        ++i
    } while (i < arg.length);
    console.log(result)
}

const e = (...arg) => {
    let result = 0
    if (arg.length === 0) {
        console.log(0)
        return
    }
    result = arg.reduce((accumulator, currentValue) => accumulator+currentValue)
    console.log(result)
}

a(1, 2, 3, 4, 5)
b(55, 23, -94)
c(0)
d(11, -1, -1, -5)
e()