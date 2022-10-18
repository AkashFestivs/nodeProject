module.exports = {
    welcome: (req, res, next) =>{
        res.render('welcome');
    },
    home: (req, res, next) =>{
        const bodyContent = req.body;
        console.log('Data : ',bodyContent)
        res.render('home.ejs');
        }
}
