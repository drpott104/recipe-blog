const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');

module.exports = {
    index,
    new: newRecipe,
    show,
    create
};

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/index', { title: 'All Recipes', recipes})
    })
}

function show(req, res) {
    
}

function newRecipe(req, res) {
    res.render('recipes/new', { title: 'Create New Recipe' });
}

function create(req, res) {

}