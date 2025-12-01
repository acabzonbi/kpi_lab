const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
    kravchuk: { born: 1934, died: 2022},
};

function age(persons){
    const LTindex = {}
    for(const index in persons){
        let info = persons[index]
        let life = info.died - info.born
        LTindex[index] = life
    }
    return LTindex
}
console.dir(age(persons));