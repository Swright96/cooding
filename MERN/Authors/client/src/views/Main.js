import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AuthorList from "../components/AuthorList"

const Main = () => {
	const [authorList, setAuthorList] = useState([])

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/author")
			.then((res) => {
				setAuthorList(res.data.author)
			})
			.catch((err) => console.log(err))
	}, [])

	const removeFromDom = (authorId) => {
		axios
			.delete("http://localhost:8000/api/author" + authorId)
			.then((res) => {
				console.log(res)
				console.log(res.data)
				setAuthorList(
					authorList.filter((author) => author._id !== authorId)
				)
			})
			.catch((err) => console.log(err))
	}

	return (
		<div>
			<h1>Favorite Authors</h1>
			<AuthorList authorList={authorList} setAuthorList={setAuthorList} />
		</div>
	)
}

export default Main
