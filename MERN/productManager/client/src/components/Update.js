import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const Update = (props) => {
	const { id } = useParams()
	const [title, setTitle] = useState("")
	const [price, setPrice] = useState("")
	const [description, setDescription] = useState("")
	const navigate = useNavigate("")

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/product/" + id)
			.then((res) => {
				console.log(res.data)
				setTitle(res.data.title)
				setPrice(res.data.price)
				setDescription(res.data.description)
			})
			.catch((err) => console.log(err))
	}, [])

	const updateProduct = (u) => {
		u.preventDefault()
		axios
			.put("http://localhost:8000/api/product/" + id, {
				title,
				price,
				description,
			})
			.then((res) => {
				console.log(res)
				console.log(res.data)
				navigate("/product")
			})
			.catch((err) => console.log(err))
	}
	return (
		<div>
			<h1>Update Product</h1>
			<form onSubmit={updateProduct}>
				<p>
					<label>Title: </label>
					<br />
					<input
						type="text"
						name="title"
						value={title}
						onChange={(u) => {
							setTitle(u.target.value)
						}}
					/>
				</p>
				<p>
					<label>Price: </label>
					<br />
					<input
						type="double"
						name="price"
						value={price}
						onChange={(u) => {
							setPrice(u.target.value)
						}}
					/>
				</p>
				<p>
					<label>Description: </label>
					<br />
					<input
						type="text"
						name="description"
						value={description}
						onChange={(u) => {
							setDescription(u.target.value)
						}}
					/>
				</p>
				<input type="Submit" />
			</form>
		</div>
	)
}

export default Update
