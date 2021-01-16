var myList = [1, 2, 3, 4]
var newList = [];


myList.forEach(item => {
    item = item + 2
    newList.push(item)
})
console.log(newList)


// x = 0
// y = 0

// do {
//     x = x + 1
//     y = y + 2
//     console.log(y)
// } while (y < 5)

const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue;
});

console.log(sum);

