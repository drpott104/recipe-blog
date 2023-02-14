const Recipe = require('../models/review');

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
    Recipe.findById(req.params.id)
        .populate('ingredients')
        .exec(function(err, recipe) {
            
        })
}

function newRecipe(req, res) {

}

function create(req, res) {

}