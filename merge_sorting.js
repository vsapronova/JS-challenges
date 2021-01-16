

function mergeSort (list) {

    if (list.length <= 1) {
        return list
    }

    mid = Math.ceil(list.length / 2)

    var leftHalf = list.slice[mid]
    var rightHalf = list.slice[mid+1]

    var left = mergeSort(leftHalf)
    var right = mergeSort(rightHalf)

    return merge(left, right)

    function merge (left, right) {

        var newSortedList = []
        var ind = null

        
        
    
    }
}












var myList = [2, 5, 6, 7, 22, 1]





