const express = require('express')
require('./db/mongoose.js')
const User = require('./models/user')

const app = express()
const port = process.env.port || 3000

// Setting up json parcing
app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})