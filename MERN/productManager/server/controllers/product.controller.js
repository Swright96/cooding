const { response } = require("express")
const Product = require("../models/product.model")

module.exports.index = (request, resposne) => {
	response.json({ message: "Loading..." })
}

module.exports.findAllProduct = (req, res) => {
	Product.find()
		.then((allTheProduct) => {
			res.json({ Product: allTheProduct })
		})
		.catch((err) => {
			res.json({ message: "Oops!", error: err })
		})
}

module.exports.createProduct = (request, response) => {
	Product.create(request.body)
		.then((peroduct) => response.json(product))
		.catch((err) => response.json(err))
}
