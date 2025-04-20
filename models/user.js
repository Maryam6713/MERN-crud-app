const mongoose = require('mongoose')
mongoose.connect("mongoDB://127.0.0.1:27017/project")

const userschema = mongoose.schema({
    username:"string",
    name:"string",
    age:"number",
    email:"string",
    password:"string"
})

module.exports = mongoose.model('user' , userschema)