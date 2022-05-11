let express = require('express');
let app =express();
app.get("/",(req,res)=>{
res.send("hello express first assignment")
})
app.listen(3000,()=>{
    console.log("we are using local host 300 in express")
})
