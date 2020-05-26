const Book = require("../models/book");

module.exports = function(app) {
    // route that will handle getting all the books
    app.get("/api/books", (req, res) => {
        Book.find({})
        .then(data => {
            console.log(data);
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(404).send(err);
        });
    });
    // route that will handle saving a book
    app.post("/api/post", ({body}, res) => {
        Book.create(body)
        .then(dbBook => {
            console.log("made book");
            res.status(200).json(dbBook);
        })
        .catch(err => {
            res.status(403).json(err);
        });
    });
    // route that will delete a book
    app.delete("/api/books/:id", (req, res) => {
        const id = req.params.id;
        Book.findOneAndDelete({id: id})
        .then(() => {
            Book.find({}).then(data => {
                res.status(200).send(data);
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send({message: "book not found"});
        });
    });
}