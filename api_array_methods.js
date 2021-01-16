const fetch = require("node-fetch")

 const getUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    const result = json.filter(user => user.name.toLowerCase().includes("k")).map(({name, email}) => ({name, email}))
    return result
}

(async function() {
    try {
        console.log( await getUser())
    } catch(err) {
        console.log(err)
    }
})()


