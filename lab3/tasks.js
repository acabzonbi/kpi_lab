//1


const random = (min, max) => {
  if (max !== undefined) {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min );
  } else {
    console.log(min)
  }
}
random(6,9)


//2


const characters = 'qwertyuiopasdfghjklzxcvbnm'
const generateKey = (length, characters) => {
    let result = ""
    const charactersLength = characters.length;
    for (let i = 0; i < length; i+=1) {
        const random = Math.floor(Math.random() * charactersLength)
        result += characters[random]
    }
    return result
}
console.log(generateKey(16, characters))


//3


const ipTransform = (IPv4 = '192.168.1.10') => {
    const ipValueArray = IPv4.split('.')
    const transformedIP = []
    for(i=0;i<ipValueArray.length;i+=1){
        let transformedElement = ipValueArray[i] << 8 * ((ipValueArray.length - 1) - i)
        transformedIP.push(transformedElement)
    }
    const result = transformedIP.reduce((accumulator, currentValue) => accumulator + currentValue)
    return result
}
console.log(ipTransform('192.168.1.10')) 


//4


const iface = {
    m1: x => [x],
    m2: function (x, y, z, w , t) {
      return [x, t];
    },
    m3(x, y, z) {
      return [x, y, z];
    }
}

const introspected = []
for(const index in iface){
    const valueArray = iface[index]
    const tempArray = [index, valueArray.length]
    introspected.push(tempArray)
}
console.dir(JSON.stringify(introspected))


