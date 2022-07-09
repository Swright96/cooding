const ProductController = require("../controllers/product.controller")

module.exports = (app) => {
	app.get("/api", ProductController.index)
	app.get("/api/product", ProductController.findAllProduct)
	app.post("/api/product", ProductController.createProduct)
}
