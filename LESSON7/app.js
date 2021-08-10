const express = require("express")
const app = express()
const userroute = require("./route1/usersroute.js")

app.use("/javascript/",userroute)
app.use((req,res)=>{
    res.send("error found. 404")
})



module.exports = app