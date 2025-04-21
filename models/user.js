const mongoose = require('mongoose')
mongoose.connect("mongoDB://127.0.0.1:27017/project")

const userschema = mongoose.schema({
    username:"string",
    name:"string",
    age:"number",
    email:"string",
    password:"string",
    post :[{
        type: mongoose.Schema.Type.ObjectId , ref : "post"
    }]
})

module.exports = mongoose.model('user' , userschema)