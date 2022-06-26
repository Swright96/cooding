//IMPORT OF FAKER AND EXPRESS NOT NEEDED WITH REQUIRE
//MUST DESTRUCTURE FAKER HERE
const { faker } = require("@faker-js/faker")
const express = require("express")
const app = express()
const port = 8000

app.listen(port, () => console.log(`Listening on port: ${port}`))

const newPerson = () => {
	const newFaker = {
		name: faker.name.findName(),
	}
	return newFaker
}
const newFakePerson = newPerson()
console.log(newFakePerson)

const newCompany = () => {
	const newComp = {
		company: faker.company.companyName(),
	}
	return newComp
}
const newFakeCompany = newCompany()
console.log(newFakeCompany)

const newCompanyAndUser = () => {
	const newCompAndUser = {
		name: faker.name.findName(),
		company: faker.company.companyName(),
	}
	return newCompAndUser
}
const newFakeCompanyAndUser = newCompanyAndUser()
console.log(newFakeCompanyAndUser)

app.get("/api/users/new", (req, res) => {
	newPerson()
	res.json({ newFakePerson })
})

app.get("/api/companies/new", (req, res) => {
	newCompany()
	res.json({ newFakeCompany })
})

app.get("/api/user/company", (req, res) => {
	newCompanyAndUser()
	res.json({ newFakeCompanyAndUser })
})
