import React from "react"
import { Link } from "react-router-dom"

const Page = (props) => {
	return (
		<div>
			<h1>Page 4</h1>
			<Link to={"/hello"}>Hello page</Link>
		</div>
	)
}

export default Page
