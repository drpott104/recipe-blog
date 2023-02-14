const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
        type: String,
        requried: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        min: 1,
        max: 5,
        default: 1,
        required: true
    },
    ingredientList: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: true
    }],
    private: {
        type: Boolean,
        default: false
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema)