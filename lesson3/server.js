const http  = require("http")
const port = 3000
const hostName = "127.0.0.1"
const MyServer = http.createServer((req,res)=>{
    res.writeHead(201,{"content-type":"text/html"})
    res.write("<h1>hello</h1>")
    res.end()
})
MyServer.listen(port,hostName,()=>{
    console.log(`server is running at http://${hostName}:${port}`)
})
