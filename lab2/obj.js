const fn = () =>{
    const obj1 = {name: ''};
    let obj2 = {name: ''};

    obj1.name = 'Sasha'
    obj2.name = 'Sasha'

    //obj1 = {bd: 061207}      obj1 const
    obj2 = {bd: 120607}

    console.dir(obj1)
    console.dir(obj2)
}
fn()

const createUser = (name, city) =>{
    let user = {name: name, city: city}
    return user
}
console.dir(createUser('Sasha', 'Kyiv'))