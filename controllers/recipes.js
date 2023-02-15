const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');

module.exports = {
    index,
    new: newRecipe,
    show,
    create,
    delete: deleteRecipe
};

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/', { title: 'All Recipes', recipes})
    })
}

function show(req, res) {
    Recipe.findById(req.params.id).exec(function(err, recipe) {
        res.render('recipes/show', {
            title: 'Recipe Detail',
            recipe
        })
    })
}

function newRecipe(req, res) {
    res.render('recipes/new', { title: 'Create New Recipe' });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    const recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if (err) return res.redirect('/recipes/new');
        res.redirect(`/recipes/${recipe._id}`);
    });
}

function deleteRecipe(req, res, next) {
    Recipe.findOne({
        'recipes._id': req.params.id,
        'recipes.user': req.user._id
    }).then(function(recipe) {
        if (!recipe) return res.redirect('/recipes')
        recipe.remove(req.params.id)
        recipe.save().then(function() {
            res.redirect(`/recipes/${recipe._id}`);
        }).catch(function(err) {
            return next(err)
        })
    })
}