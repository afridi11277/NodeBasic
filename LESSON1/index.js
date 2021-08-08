const fs = require("fs")
fs.writeFileSync("demo1.txt","\n append next semester another one to next level",(writefile)=>{
    if(err){
        console.log(writefile)
    }
    else{
        console.log("successfully run the data")
    }
})