const encode = (string)=>{
    let counted = {}
    let arrOfLetters = string.split('')
    for (var i = 0; i < arrOfLetters.length; i++) {
        var letter = arrOfLetters[i]
        counted[letter] = counted[letter] ? counted[letter] + 1 : 1
    }
    let result = ""
    for (let prop in counted) {
        result +=`${counted[prop]}${prop}`
    }
    return result
}




const encode = (string)=>{
    return string.replace(/(\w)\1+/g, (m,v) => `${m.length}${v}`)
}

const decode = (string)=>{
    return string.replace(/(\d+)(\w)/g, (x,y,z) => z.repeat(y))
}

console.log(encode('wwwiiuuuu')) // 3w2i4u
console.log(decode('2u3a4o')) // uuaaaoooo 