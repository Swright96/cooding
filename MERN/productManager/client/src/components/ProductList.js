import React, { useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const ProductList = (props) => {
	const { removeFromDom, product, setProduct } = props
	const deleteProduct = (productId) => {
		axios
			.delete("http://localhost:8000/api/product/" + productId)
			.then((res) => {
				removeFromDom(productId)
			})
			.catch((err) => console.log(err))
	}

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/product")
			.then((res) => {
				console.log(res.data)
				setProduct(res.data.Product)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<div>
			{product.map((product, index) => (
				<div key={index}>
					<Link to={`/product/${product._id}`}>{product.title} </Link>
					<Link to={"/product/edit/" + product._id}>Edit </Link>
					<button
						onClick={(d) => {
							deleteProduct(product._id)
						}}
					>
						Delete
					</button>
				</div>
			))}
		</div>
	)
}
export default ProductList
