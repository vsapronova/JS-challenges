const fetch = require("node-fetch")

const persons = 
    [
        {
            id: 1,
            firstName: "Vika",
            lastName: "Sapronova"
        },
        {
            id: 2,
            firstName: "Vlad",
            lastName: "Sapr"
        }
    
    ]



function fetchUser() {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(json => console.log(json.results))
        .catch(err => console.log(err))
}

const getData = (persons, callback) => {
    setTimeout(() => 
    { 
        persons.forEach ( person =>
         (console.log(person.firstName)))
         callback()
    }, 2000)
}

// fetchUser()
getData(persons, fetchUser)