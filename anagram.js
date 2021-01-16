function ifAnagram(str1, str2) {
    let dict1 = {}
    let dict2 = {}
    for (let char in str1) {
        dict1[char] += 1
    } 
    for (let char in str2) {
        dict2[char] += 1
    }
    if (Object.keys(dict1).length === Object.keys(dict2).length 
    && Object.keys(dict1).every(p => dict1[p] === dict2[p])) {
        return true
    } else {
        return false
    }

 }

 console.log(ifAnagram("momo", "omom"))