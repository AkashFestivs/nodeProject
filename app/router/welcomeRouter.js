const router = require('express').Router();
const welcomeController = require('../controller/welcomeController');
router.get('/welcome',welcomeController.welcome);
router.get('/homepage',welcomeController.homepage);
module.exports = router;