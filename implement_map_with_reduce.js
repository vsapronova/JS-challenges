function map(array, callback) {
    return array.reduce((accum, value) => {
        return [...accum, callback(value)]
    }, [])
}


console.log(map([1,2,3], (v) => v + 1))