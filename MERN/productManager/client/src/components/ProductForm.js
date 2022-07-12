import React, { useState } from "react"
import axios from "axios"

const ProductForm = (props) => {
	const { product, setProduct } = props
	const [title, setTitle] = useState("")
	const [price, setPrice] = useState("")
	const [description, setDescription] = useState("")

	const onSubmitHandler = (p) => {
		p.preventDefault()
		axios
			.post("http://localhost:8000/api/product", {
				title,
				price,
				description,
			})
			.then((res) => {
				console.log(res)
				console.log(res.data)
				setProduct([...product, res.data])
				setTitle("")
				setPrice("")
				setDescription("")
			})
			.catch((err) => console.log(err))
	}

	return (
		<form onSubmit={onSubmitHandler}>
			<p>
				<label>Title</label>
				<br />
				<input type="text" onChange={(p) => setTitle(p.target.value)} />
			</p>
			<p>
				<label>Price</label>
				<br />
				<input
					type="double"
					onChange={(p) => setPrice(p.target.value)}
				/>
			</p>
			<p>
				<label>Description</label>
				<br />
				<input
					type="text"
					onChange={(p) => setDescription(p.target.value)}
				/>
			</p>
			<input type="submit" />
		</form>
	)
}

export default ProductForm
