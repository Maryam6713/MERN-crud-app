const mongoose = require('mongoose')


const postschema = mongoose.schema({
user : {
    type: mongoose.Schema.Type.ObjectId,
    ref : "user"
},
 date:{
    type : Date,
    default : Date.now
 },
 content: String,
 like : [
    {type: mongoose.Schema.Type.ObjectId,
        ref : "user"}
 ]

})

module.exports = mongoose.model('post' , postschema)