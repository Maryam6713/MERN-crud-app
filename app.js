const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.set("view engine", "ejs") // FIXED typo

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())

app.get("/" , (req,res)=>{
    res.render("index") // Make sure index.ejs exists in /views
})

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000")
})
