var express = require('express');
var router = express.Router();
var recipesCtrl = require('../controllers/recipes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', recipesCtrl.index);
router.get('/new', ensureLoggedIn, recipesCtrl.new);
router.get('/:id', recipesCtrl.show);
router.get('/:id/edit', ensureLoggedIn, recipesCtrl.edit)
router.post('/', ensureLoggedIn, recipesCtrl.create);
router.delete('/:id', ensureLoggedIn, recipesCtrl.delete);
router.put('/:id', ensureLoggedIn, recipesCtrl.update)

module.exports = router;