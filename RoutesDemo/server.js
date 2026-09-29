const express= require('express')
const app= express()
const user= require('./routes/user')
const post = require('./routes/post')
const cookieParser=require('cookie-parser')
const session = require('express-session')
const flash= require('connect-flash')
const path= require('path')

// app.use(cookieParser("secret code"));
// app.use('/user',user) //use routes in user.js for routes starting with /user
// app.use('/post',post)

// app.get('/getcookies',(req,res)=>{
//     res.cookie("greet","Namaste")
//     res.cookie('madeIn',"India")
//     res.cookie('Name','Charan')
//     console.log(req.cookies);
//     res.send('sent some cookies')

// })

// app.get('/getsignedcookies',(req,res)=>{
//     res.cookie("sec","c",{signed:true})
//     res.send('signed cookie sent')
// })

// app.get('/verify',(req,res)=>{
//     console.log(req.cookies)
//     console.log(req.signedCookies);
//     res.send('verified')

// })
// app.get('/',(req,res)=>{
//     console.log(req.cookies)
//     res.send(`Hi ${req.cookies.Name}`)
// })


app.set("view engine",'ejs')
app.set("views",path.join(__dirname,"views"))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true}))

app.use(flash())

app.use((req,res,next)=>{
     next();
})

app.get('/test',(req,res)=>{
    res.send(`id sent`)
})

app.get('/register',(req,res)=>{
    let {name='unknown'}=req.query;
    console.log(req.session)
    req.session.name=name;
    req.flash("success", "user registered successfully");
    res.redirect("/hello");


})

app.get('/hello',(req,res)=>{

    res.locals.msg = req.flash("success");
    res.render('flash.ejs',{name:req.session.name})
})
app.listen(3000,()=>{
    console.log(`listening n 3000`)
})