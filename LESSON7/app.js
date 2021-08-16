const express = require("express")

const app = express()
const userRoute = require("./route1/usersroute")



app.use(userRoute)

app.get( (req,res)=>{
    res.end("<h1>404</h1>")
})

module.exports = app