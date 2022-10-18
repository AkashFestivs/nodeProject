

module.exports = {
    welcome: (req, res, next) =>{
        res.render('welcome');
    },
    homepage:(req,res,next) =>{
        console.log(req.query);
        res.render('home');
    }
}
