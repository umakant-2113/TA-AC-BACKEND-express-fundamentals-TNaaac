var express=require('express');
var logger=require('morgan');
var morgan = require('morgan');

var cookieparser=require('cookie-parser')

var app=express();

app.use(cookieparser())

app.use(logger('dev'))

app.use((req,res,next)=>{
res.cookie("username","umakant")
next()
})
app.use((req,res,next)=>{
res.cookie("user","rajput")
next()
});
app.use((req,res,next)=>{
res.cookie("class","middleware")
next()
})

app.get("/about",(req,res)=>{
    res.send('welcome to express')
})

app.listen(3000,()=>{
    console.log('we are using local host 3000')
})