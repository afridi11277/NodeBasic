const express = require("express")

const router = express.Router()




router.post("/",(req,res)=>{
    res.end("i am a POST ROUTE")
})

router.put("/",(req,res)=>{
    res.end("i am a PUT ROUTE")
})

router.delete("/",(req,res)=>{
    res.end("i am a DELETE ROUTE")
})

router.get("/login",(req,res)=>{
    res.send('<h1>listen route</h1>')
})

router.get("/register",(req,res)=>{
    res.send('<h1>register route</h1>')
})



module.exports = router