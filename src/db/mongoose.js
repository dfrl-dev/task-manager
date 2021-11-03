const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// mongoose models
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) { 
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain the the word password.')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number.')
            }
        }
    }
})

const Task = mongoose.model('Tasks', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const me = new User({
    name: '   Dylan ',
    email: '  DFLAUZON@GMAIL.COM',
    password: 'PASSWORD123'
})

me.save().then( () => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})



// const clean = new Task({
//     description: 'Clean the house',
//     completed: false
// })

// clean.save().then(() => {
//     console.log(clean)
// }).catch((error) => {
//     console.log('Error', error)
// })
 
// const task = new Task({
//     description: 'Walk the dog',
//     completed: true
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })

