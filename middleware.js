module.exports=(req,res,next)=>{
    if (!req.isAuthenticated()) {
      //store initial redirectUrl
      req.session.redirectUrl=req.originalUrl
      console.log(req.session.redirectUrl)
      req.flash("error", "You must login before doing that.");
      res.redirect("/login");
    } else{
        next()
    }

}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl
    }
    next()
}