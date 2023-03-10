const Recipe = require('../models/recipe');

module.exports = {
    index,
    subIndex,
    new: newRecipe,
    show,
    create,
    delete: deleteRecipe,
    edit,
    update
};

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/', { title: 'Browse Recipes', recipes})
    })
}

function subIndex(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/subIndex', { title: 'Category', recipes})
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
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
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
    Recipe.findById(req.params.id)
        .then(function(recipe) {
            recipe.deleteOne();
            res.redirect('/recipes')
        })
    }


async function edit(req, res, next) {
    try {
        const recipe = await Recipe.findById(req.params.id)
        .populate("ingredients").populate("directions").exec();
        res.render('recipes/edit', { title: 'Update Recipe', recipe })
    } catch(err) {
        next(err);
    }

}

function update(req, res) {
    Recipe.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new: true},
        function(err, recipe) {
            if (err || !recipe) return res.redirect('/recipes');
            res.redirect(`/recipes/${recipe._id}`)
        })
}