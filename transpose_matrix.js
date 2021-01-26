const transposeMatrix = (array) => {
    var newArr = []
    for (var col = 0; col < array[0].length; col++) {  
        var smallArr = []
        for (var row = 0; row < array.length; row++) {
            smallArr.push(array[row][col])
        } newArr.push(smallArr)
    } return newArr
}

const transposeMatrix = (array) => {
    return array[0].map((_,i)=>array.map(v=>v[i]))
}

console.log(transposeMatrix([
    [1,2,3],
    [1,2,3],
    [1,2,3],
]))