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
    directions: {
        type: String,
        required: true,
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
    ingredients: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Sauces'],
        required: true
    },
    directions: {
        type: String,
        required: true
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema)