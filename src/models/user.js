const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    }, email: {
        type: String,
        require: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('You mast provide a valid e-mail')
            }
        }
    }, password:{
        type: String,
        require: true,
        trim: true,
        validate(value){
            if(value.length < 6 || value == 'password'){
                throw new Error('Weak password!')
            }
        }
    }, age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const andrew = new User({
    name: 'Kekeksandr   ',
    email: '  Mike@mail.com',
    password: 'password1'

})

module.exports = User