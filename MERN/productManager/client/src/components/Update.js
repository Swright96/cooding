import React, { useEffect, useState } from "react"
import axios from "axios"
import ProductForm from "./ProductForm"
import DeleteButton from "./DeleteButton"
import { useNavigate, useParams } from "react-router-dom"

const Update = (props) => {
	const { id } = useParams()
	const [product, setProduct] = useState({})
	const [loaded, setLoaded] = useState(false)
	const navigate = useNavigate()
	useEffect(() => {
		axios.get("http://localhost:8000/api/product/" + id).then((res) => {
			setProduct(res.data)
			setLoaded(true)
		})
	}, [])

	const updateProduct = (productParam) => {
		axios
			.put("http://localhost:8000/api/product/" + id, productParam)
			.then((res) => console.log(res))
	}

	return (
		<div>
			<h1>Update Product</h1>
			{loaded && (
				<>
					<ProductForm
						onSubmitProp={updateProduct}
						initialTitle={product.title}
						initialPrice={product.price}
						initialDescription={product.description}
					/>
					<DeleteButton
						productId={product._id}
						successCallback={() => navigate("/product")}
					/>
					<button onClick={() => navigate("/product")}>Back</button>
				</>
			)}
		</div>
	)
}

export default Update
