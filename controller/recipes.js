const Recipe = require('../models/review');

module.exports = {
    index,
    show,
    new: newRecipe,
    create
};

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        console.log('active')
        res.render('movies/index', { title: 'All Recipes', recipes})
    })
}

function show(req, res) {
   
}

function newRecipe(req, res) {

}

function create(req, res) {

}