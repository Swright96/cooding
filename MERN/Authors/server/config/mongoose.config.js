const mongoose = require("mongoose")

mongoose
	.connect("mongodb://localhost/authordb", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Database Connection Established"))
	.catch((err) =>
		console.log("Someting went wrong when connecting to the databse", err)
	)
