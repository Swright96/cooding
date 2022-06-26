import React from "react"
import { Link } from "react-router-dom"

const text = {
	color: "blue",
	background: "red",
}

const Coloredhello = () => {
	return (
		<div>
			<h1 style={text}>Hello</h1>
			<Link to={"/home"}>Back to Home</Link>
		</div>
	)
}

export default Coloredhello
