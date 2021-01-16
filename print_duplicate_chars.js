const arrOfChars = ["a", "a", "b", "c"]

let noDupl = []

for(let char of arrOfChars) {
    if(noDupl.includes(char)) {
        console.log(char)
    } else {
        noDupl.push(char)
    }
}
