

const removeDuplicates = array => {
    return array.reduce((accumulator, item) => {
        return accumulator.includes(item) ? accumulator : [...accumulator, item]
    }, [])
}


console.log(
    removeDuplicates(["one", "two", "one", "three", "three", "two"])
  )