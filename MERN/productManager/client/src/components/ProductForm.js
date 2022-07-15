import React, { useState } from "react"
import axios from "axios"

const ProductForm = (props) => {
	const { initialTitle, initialPrice, initialDescription, onSubmitProp } =
		props
	const [title, setTitle] = useState("")
	const [price, setPrice] = useState("")
	const [description, setDescription] = useState("")
	const onSubmitHandler = (p) => {
		p.preventDefault()
		onSubmitProp({ title, price, description })
	}

	return (
		<form onSubmit={onSubmitHandler}>
			<p>
				<label>Title</label>
				<br />
				<input
					type="text"
					name="title"
					value={title}
					onChange={(p) => setTitle(p.target.value)}
				/>
			</p>
			<p>
				<label>Price</label>
				<br />
				<input
					type="double"
					name="price"
					value={price}
					onChange={(p) => setPrice(p.target.value)}
				/>
			</p>
			<p>
				<label>Description</label>
				<br />
				<input
					type="text"
					name="description"
					value={description}
					onChange={(p) => setDescription(p.target.value)}
				/>
			</p>
			<input type="submit" />
		</form>
	)
}

export default ProductForm
