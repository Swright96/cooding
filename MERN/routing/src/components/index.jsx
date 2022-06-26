import React from "react"
import { Link } from "react-router-dom"

const Index = () => {
	return (
		<div>
			<h1>Welcome</h1>
			<Link to={"/4"}>Go to page 4</Link>
		</div>
	)
}

export default Index
