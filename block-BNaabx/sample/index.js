var express=require("express");
var app=express();
let date=new Date()
// middleware
app.use((req,res,next)=>{
    console.log(req.method + req.url + date.getMilliseconds());
next();
})

// custome middleware
app.use(ownJson);

function ownJson(req,res,next){
let store="";
req.on("data",(chunk)=>{
    store+=chunk;
})
req.on("end",()=>{
    req.body=store;
    console.log(req.body)
})
next()
}
// custome middleware static

app.use(customStatic);
function customStatic(req, res, next) {
  if (req.url.split(".").pop() === "css") {
    const cssFile = req.url;
    res.sendFile(__dirname + "/public/");
  }
  if (req.method === "GET" && req.url.split(".").pop() === "jpg") {
    const imageUrl = req.url;
    res.send(__dirname + "/public/" + req.url);
  }
  next();
}

app.listen(4000,()=>{
    console.log("server port on 4k")
})