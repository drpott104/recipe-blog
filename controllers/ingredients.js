const Ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');

module.exports = {
    new: newIngredient,
    create,
    addToList
}

function addToList(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        recipe.ingredientList.push(req.body.ingreidentId);
        recipe.save(function(err) {
            res.redirect(`/recipes/${recipe._id}`)
        })
    })
}

function newIngredient(req, res) {
    Recipe.find({})
        .exec(function (err, ingredients) {
            res.render('ingredients/new', {
                title: 'Add Ingredient',
                ingredients
            });
        });
}

function create(req, res) {
    Ingredient.create(req.body, function(err, ingredient) {
        res.redirect('/ingredients/new')
    });
}