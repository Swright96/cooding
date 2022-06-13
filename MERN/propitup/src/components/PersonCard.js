import React, { useState } from "react"

const PersonCard = (props) => {
	const { firstName, lastName, age, hairColor } = props
	const [plusAge, setPlusAge] = useState(age)
	console.log(plusAge)
	return (
		<div>
			<h1>
				{lastName}, {firstName}
			</h1>
			<p>Age: {plusAge}</p>
			<p>Hair Color: {hairColor}</p>
			<button onClick={() => setPlusAge(plusAge + 1)}>
				Birthday Button for {firstName} {lastName}
			</button>
		</div>
	)
}

export default PersonCard
