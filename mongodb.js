//CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
       return console.log('Unable to connect to database.')
    } 

    const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name: 'Dylan',
    //     age: '32'
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user.')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Franklin',
    //         age: '7'
    //     },
    //     {
    //         name: 'Rachelle',
    //         age: '32'
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('failed to insert')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Give the dog a bath',
            completed: false
        },
        {
            description: 'Snuggle Rachelle',
            completed: false
        },
        {
            description: 'Burn out from over studying',
            completed: true
        }
    ], (error, result) => {
        if(error) {
            return console.log('failed to insert')
        }

        console.log(result.ops)
    })


})