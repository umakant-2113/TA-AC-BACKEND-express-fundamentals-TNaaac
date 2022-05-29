let express=require('express');
let app=express();
// route
app.use("/Admin",(req,res,next)=>{
    if(req.url == "admin"){
        return next("unathorize user");
    }
    
next()
})
app.get("/",(req,res)=>{
    res.send("welcome to first")
})
app.get('/about',(req,res)=>{
    res.send('about page ')
})
app.use((req,res,next)=>{
    res.send("page not found")
    next();
});
app.use((err,req,res,next)=>{
    res.send(err)
})


app.listen(3000,()=>{
    console.log('server local port using 3k')
})