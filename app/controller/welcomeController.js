

module.exports = {
    welcome: (req, res, next) =>{
        res.render('welcome');
    },
    home: (req, res, next) =>{
        console.log(req.query); 
    },
    homepage:(req,res,next) =>{
        res.render('home');
    }
}
