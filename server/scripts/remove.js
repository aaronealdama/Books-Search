const mongoose = require("mongoose");
const Book = require("../models/book");

mongoose.connect("mongodb://localhost/edushare", {
  useNewUrlParser: true,
  useFindAndModify: false
});

Book.deleteMany({}).then(() => {
    console.log("Books deleted");
});