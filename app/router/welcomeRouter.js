const router = require('express').Router();
const welcomeController = require('../controller/welcomeController');
router.get('/welcome', welcomeController.welcome);
router.get('/home', welcomeController.home);
module.exports = router;