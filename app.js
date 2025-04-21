const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const userModel = require("./models/user")
// const postModel = require("./models/post")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.set("view engine", "ejs") // FIXED typo

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())


app.get("/" , (req,res)=>{
    res.render("index") // Make sure index.ejs exists in /views
})

app.post("/register" , async(req,res)=>{
    let {email , password , confirmpassword , firstname , lastname} = req.body
    let user = await userModel.findOne({email})
    if(user) return res.status(500).send("user already registered")

        bcrypt.genSalt(10 , (err, salt)=>{
            bcrypt.hash(password , salt , async(err , hash)=>{
              let user = await userModel.create({
                email,
                password : hash,
                confirmpassword : hash,
                firstname,
                lastname
             })
             let token = jwt.sign({email: email , userid : user._id} , "something")
                res.cookie("token" ,token)
                res.send("registered")
            })
            
        })
})

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000")
})
