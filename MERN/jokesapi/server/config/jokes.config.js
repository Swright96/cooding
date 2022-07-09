const mongoose = require("mongoose")

const mongoEndpoint = "mongodb://localhost/"
const dbName = "jokes-db"

mongoose
	.connect(mongoEndpoint + dbName)
	.then(() => console.log("Established the connection to " + dbName))
	.catch((err) => console.log("Oops! We have an error connecting!", err))
