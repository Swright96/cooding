const JokeController = require("../controllers/jokes.controller")

//Least specific requirements above more specific, all jokes is less specific than ONE Joke

module.exports = (app) => {
	app.get("/api/jokes", JokeController.findAllJokes)
	app.get("/api/jokes/:id", JokeController.findOneSingleJoke)
	app.put("/api/jokes/:id", JokeController.updateExistingJoke)
	app.post("/api/jokes", JokeController.createNewJoke)
	app.delete("/api/jokes/:id", JokeController.deleteAnExistingJoke)
}
