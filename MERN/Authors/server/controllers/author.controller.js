const { response } = require("express")
const Author = require("../models/author.model")

const createNewAuthor = (req, res) => {
	Author.create(req.body)
		.then((newAuthor) => {
			res.json({ newAuthor })
		})
		.catch((err) => {
			res.status(400).json({ err })
		})
}

module.exports.index = (request, resposne) => {
	response.json({ message: "Loading..." })
}

module.exports.findAllAuthor = (req, res) => {
	Author.find()
		.then((allTheAuthor) => {
			res.json({ Author: allTheAuthor })
		})
		.catch((err) => {
			res.json({ message: "Oops!", error: err })
		})
}

module.exports.getAuthor = (request, response) => {
	Author.findOne({ _id: request.params.id })
		.then((author) => response.json(author))
		.catch((err) => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
	Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
		new: true,
	})
		.then((updatedAuthor) => response.json(updatedAuthor))
		.catch((err) => response.json(err))
}

module.exports.deleteAuthor = (request, response) => {
	Author.deleteOne({ _id: request.params.id })
		.then((deleteConfirmation) => response.json(deleteConfirmation))
		.catch((err) => response.json(err))
}

module.exports = {
	createNewAuthor,
}
