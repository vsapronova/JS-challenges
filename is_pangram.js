const abc = 'abcdefghijklmnopqrstuvwxyz'

const isPangram = (string) => {
    const letters = [...new Set(string.toLowerCase().trim().split(" ").join(""))].sort().join("")
    return abc === letters
}

console.log(isPangram('The quick Brown fox jumps over the lazy DOG'))
console.log(isPangram('abcdefghijklrstuvwxyz'))