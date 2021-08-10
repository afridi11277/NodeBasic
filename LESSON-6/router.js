const http = require( "http" )
const fs = require("fs")
const hostName = "127.0.0.1"
const port = 3000
const server = http.createServer((req,res) =>{
    const handeReadFile = (statusCode,fileLocation)=>{
        fs.readFile(fileLocation,(err,data)=>{
            res.writeHead(statusCode, {"content-type":"text/html"})
            res.write(data)
            res.end()
        })
    }
    

})