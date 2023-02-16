var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');
var ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/recipes/:id/reviews', ensureLoggedIn, reviewsCtrl.create);
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;