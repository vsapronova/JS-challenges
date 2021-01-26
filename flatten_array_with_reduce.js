

const makeFlat = array => {
    return array.reduce((accum, value) => {
        return Array.isArray(value) ? [...accum, ...makeFlat(value)] : [...accum, value]

    }, [])

}

console.log(makeFlat(['one', ['two', 'three'], ['four', ['five']]]))