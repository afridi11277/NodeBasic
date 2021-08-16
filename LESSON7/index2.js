const express = require("express")
app = express()
port = 8000
app.get("/",(req,res)=>{
    res.end("Hello Express js nai")
})
app.listen(port,()=>{
    console.log("server running")
})