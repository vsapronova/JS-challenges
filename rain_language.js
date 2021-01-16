

function rainLang(number) {
    let result = ""
    if (number%3===0) result += "Pling"
    if (number%5===0) result += "Plang"
    if (number%7===0) result += "Plong"

    return result || number
}


console.log(rainLang(3))
console.log(rainLang(21))
console.log(rainLang(35))
console.log(rainLang(2))