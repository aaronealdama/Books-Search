const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    authors: {
        type: Array
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    link: {
        type: String,
        trim: true
    },
    id: {
        type: String,
        trim: true
    }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;