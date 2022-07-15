import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import DeleteButton from "./DeleteButton"

const ProductList = (props) => {
	const [product, setProduct] = useState([])
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/product")
			.then((res) => setProduct(res.data.Product))
	}, [])

	const removeFromDom = (productId) => {
		setProduct(product.filter((product) => product._id != productId))
	}

	return (
		<div>
			{product.map((product, index) => (
				<div key={index}>
					<Link to={`/product/${product._id}`}>{product.title} </Link>
					<Link to={"/product/edit/" + product._id}>Edit </Link>
					<DeleteButton
						productId={product._id}
						successCallback={() => removeFromDom(product._id)}
					/>
				</div>
			))}
		</div>
	)
}
export default ProductList
