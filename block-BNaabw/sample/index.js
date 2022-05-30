let express=require('express');
var cookieParser = require('cookie-parser')
var logger = require('morgan')
let app=express();
// middleware
app.use(express.json());

app.use(express.urlencoded({extended:false}))

app.use(express.static(__dirname + "/public" ))

app.use(logger("dev"))

app.use(cookieParser())
app.use((req,res,next)=>{
    console.log(req.cookies);
    res.cookie("count","umakant");
    next();
})

// route
app.get("/form",(req,res)=>{
    res.send("welcome")
})

app.get("/users",(req,res)=>{
    res.send("user using express")
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/project",(req,res)=>{
    res.sendFile(__dirname + "/project.html")
})
// error handler
app.use((err,req,res,next)=>{
    res.statuscode=404;
    next(err)
})

// server
app.listen(4000,()=>{
    console.log('server is port on 4k')
})