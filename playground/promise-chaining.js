require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('6182de8f1e0f0d3bb9613590', { age: 1 } ).then((user) => {
    console.log(user)
    return User.countDocuments( { age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})