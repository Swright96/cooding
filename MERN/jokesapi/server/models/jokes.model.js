const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema(
	{
		setup: {
			type: String,
			required: true,
		},
		punchline: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

mongoose.set("debug", true)

const Joke = mongoose.model("joke", JokeSchema)

module.exports = Joke
