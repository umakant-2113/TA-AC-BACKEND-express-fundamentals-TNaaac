var express=require('express');
var logger=require('morgan');
var morgan = require('morgan');
var cookieparser=require('cookie-parser')
var app=express();
app.use(cookieparser())
app.use(logger('dev'))

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname+"/public"))

app.use((req,res,next)=>{
    console.log(req.cookies)
})

app.use('/about',(req,res,next)=>{
res.cookie("username","arya")
res.end(req.cookies);
})

app.get("/",(req,res)=>{
    res.send('welcome to express')
})

app.listen(3000,()=>{
    console.log('we are using local host 3000')
})