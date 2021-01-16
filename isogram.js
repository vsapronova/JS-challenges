const isIsogram = (string) => {
    const lowered = string.toLowerCase().split('')
   
    const setOfLetters = [...new Set(lowered)]
    return lowered.length === setOfLetters.length
}

console.log(isIsogram('ambidExtrously')) // true
console.log(isIsogram('patteRN')) // false



const isIsogram = (string) => {
    
    const lowerCased = string.toLowerCase()
    
    const result = lowerCased.split('').every((v,i)=>console.log(v,i) || lowerCased.indexOf(v)===i)
    
    return result

}

console.log(isIsogram('ambidExtRously')) // true
console.log(isIsogram('patteRN')) // false