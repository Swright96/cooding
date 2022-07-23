const AuthorController = require("../controllers/author.controller")

module.exports = (app) => {
	app.get("/api", AuthorController.index)
	app.get("/api/author", AuthorController.findAllAuthor)
	app.put("/api/author/:id", AuthorController.updateAuthor)
	app.post("/api/author", AuthorController.createAuthor)
	app.delete("/api/author/:id", AuthorController.deleteAuthor)
}
