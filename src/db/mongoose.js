const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

// const me = new User({
//     name: 'Dylan',
//     age: 32
// })

// me.save().then( () => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const Task = mongoose.model('Tasks', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const clean = new Task({
    description: 'Clean the house',
    completed: false
})

clean.save().then(() => {
    console.log(clean)
}).catch((error) => {
    console.log('Error', error)
})

