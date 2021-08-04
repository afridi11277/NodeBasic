const http = require("http")
const port = 3000
const hostname = "127.0.0.2"
const myServer = http.createServer((req,res)=>{
    res.end("whats up bud")
})  
myServer.listen(port,()=>{
    console.log(`server in ruuning at http://${hostname}:${port}`)
}) 