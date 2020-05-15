// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// Destructuring
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Connection failed ' + error)
    }
    
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Andrey',
    //     age: 28
    // }, (error, result) => {
    //     if(error){
    //         return console.log('An error ocured: ' + error)
    //     }

    //     console.log('Inserted! ' + result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: '27'
    //     }, {
    //         name: 'Gunther the penguin',
    //         age: 28
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Ooops! Something went wrong!')
    //     }

    //     console.log(result.ops)
    // })

//     db.collection('tasks').insertMany([{
//         task: 'Buy milk',
//         completeStatus: true
//     },{
//         task: 'Fix car',
//         completeStatus: true
//     },{
//         task: 'Wash dishes',
//         completeStatus: false
//     }
// ], (error, result) => {
//     if(error){
//         return console.log('Could not insert values!')
//     }

//     console.log(result.ops)

// })

// db.collection('users').findOne({_id: new ObjectID("5ebafdc58660890734d96324")}, (error, result) => {
//     if(error){
//         return console.log('unable to find the user')
//     }

//     console.log(result)

// })

// db.collection('users').find({age: 27}).toArray((error, users) => {
//     if(error){
//         return console.log(error)
//     }

//     console.log(users)

// })

// db.collection('tasks').find({completeStatus: false}).toArray((error, tasks) => {
//     if(error){
//         return console.log(error)
//     }

//     console.log(tasks)

// })

// db.collection('users').updateOne(
//     {_id: new ObjectID("5ebafcf2da95f911241fae8f")},
// {
//     $set:{
//         name: 'Michael'
//     }
// }).then((result) => {
//     //
// }).catch((error) => {
//     //
// })

// db.collection('tasks').updateMany({completeStatus: true},
//     {
//         $set:{
//             completeStatus: false
//         }
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

db.collection('users').deleteMany({age: 27}).then((result) => {console.log(result)}).catch((error) => {
    console.log(error)
})


})