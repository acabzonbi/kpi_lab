// first instance
const phones = [
    {name: 'name1', phone: '+380 11 1111111'},
    {name: 'name2', phone: '+380 22 2222222'},
    {name: 'name3', phone: '+380 33 3333333'},
    {name: 'name4', phone: '+380 44 4444444'},
    {name: 'name5', phone: '+380 55 5555555'}
]

const findPhoneByName = (name) => {
    for(a = 0; a<= phones.length; a++){
        if(name == phones[a].name){
            return phones[a].phone
        }throw ("error")
    }
}
console.dir(findPhoneByName('name1'))

const phones2 = {
    name6: '+380 66 6666666',
    name7: '+380 77 7777777',
    name8: '+380 88 8888888',
    name9: '+380 99 9999999',
    name10: '+380 10 1010101'
}
const findPhoneByName2 = (name) => {return phones2[name]}
console.dir(findPhoneByName2("name6"))