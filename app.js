const express = require("express")
const app = express();
const mongoose= require("mongoose")
const Listing = require("./models/listing.js")
const path = require("path")
const port = 8080
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate')
const ExpressError= require('./ExpressError.js')
const {listingSchema,reviewSchema}=require('./schema.js');
const Review= require('./models/review.js')
const connectDB =require('./db.js')
const listingRouter = require('./routes/listing.js')
const reviewRouter= require('./routes/review.js')
const userRouter=require('./routes/user.js')
const session=require('express-session')
const flash= require('connect-flash')
const passport=require('passport')
const User=require('./models/user.js')
const LocalStrategy=require('passport-local')

const sessionOptions = {
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 1000,
    httpOnly:true
  },
};

// to connect to db
startServer();

app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist")),
);


app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(session(sessionOptions))
app.use(flash())

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
  res.locals.msg = req.flash("success");
  res.locals.errmsg = req.flash("error");
  next();
})

app.use((req,res,next)=>{
  res.locals.currUser=req.user;
  next()
})

app.get('/',(req,res)=>{
    res.send('working')
})

app.get('/demouser',async (req,res)=>{
  let fakeUser=new User({
      email:"example@gmail.com",
      username:"demo-user"
  })
  let userResponse= await User.register(fakeUser,"mypassword")
  res.send(userResponse)
})

app.use('/listings',listingRouter)

//Reviews 

app.use('/listings/:id/reviews',reviewRouter)

app.use('/',userRouter)



app.use((err,req,res,next)=>{
    let{status,message}=err;
    res.status(status||500).render('listings/error.ejs',{err})
})

async function startServer() {
  try {
    await connectDB();
    console.log('connected to db')
  } catch (err) {
    console.error(err);
  }
}


app.listen(port,()=>{
    console.log("listening on port 8080")
})

