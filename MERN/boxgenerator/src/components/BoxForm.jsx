import React, { useState } from "react"

const BoxForm = (props) => {
	const [boxColor, setBoxColor] = useState("")
	// const [boxColorError, setBoxColorError] = useState("")

	// const validateBoxColor = (c) => {
	// 	setBoxColor(c.target.value)
	// 	if (c.target.value == null) {
	// 		setBoxColorError("A color must be selected")
	// 	} else {
	// 		setBoxColorError("")
	// 	}
	// }

	const createBox = (c) => {
		c.preventDefault()
	}

	const boxStyle = {
		margin: "5px",
		height: "100px",
		width: "100px",
		border: "2px solid red",
		background: { boxColor },
	}

	return (
		<div>
			<form onSubmit={createBox}>
				<div>
					<label>Color: </label>
					<input
						type="text"
						onChange={(c) => {
							setBoxColor(c.setBoxColor)
						}}
						name="boxColor"
					/>
					{/* <p>{boxColorError}</p> */}
					<input type="submit" value="Create Box" />
				</div>
			</form>

			<div style={boxStyle}>yup</div>
		</div>
	)
}

export default BoxForm
