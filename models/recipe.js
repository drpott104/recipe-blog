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
    ingredients: {
        type: Array,
        required: true,
        
    },
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Recipe', recipeSchema)