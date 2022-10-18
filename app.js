const express = require('express');
const app = express();

const welcomeRouter = require('./app/router/welcomeRouter');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('views','./views');
app.set('view engine','ejs');

app.use('/',welcomeRouter);

app.listen(3000, function(){
    console.log("Server has started")
})