const { response } = require("express")
const Person = require("../models/person.model")

//response instead of res is IMPORTANT because 'response' is used

module.exports.index = (reqeust, response) => {
	response.json({ message: "Hello World" })
}

module.exports.findAllPeople = (req, res) => {
	Person.find()
		.then((people) => {
			console.log(people)
			res.json({ people })
		})
		.catch((err) => {
			console.log(err)
			res.json({ message: "Oopsie!", error: err })
		})
}

module.exports.createPerson = (request, response) => {
	Person.create(request.body)
		.then((person) => response.json(person))
		.catch((err) => response.json(err))
}

module.exports.getPerson = (request, response) => {
	Person.findOne({ _id: request.params.id })
		.then((person) => response.json(person))
		.catch((err) => response.json(err))
}
