import React, { useEffect } from "react"
import { useState } from "react"

const Pokeapi = (props) => {
	const [pokemon, setPokemon] = useState([])
	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon")
			.then((response) => {
				return response.json()
			})
			.then((response) => {
				setPokemon(response.results)
				console.log(response)
			})
			.catch((err) => {
				console.log(err)
			})
	})
	return (
		<div>
			{pokemon.length > 0 &&
				pokemon.map((pokemon, index) => {
					return (
						<div key={index}>
							<li>{pokemon.name}</li>
						</div>
					)
				})}
		</div>
	)
}

export default Pokeapi
