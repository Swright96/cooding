import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react"

const Pokeapi = (props) => {
	const [pokemon, setPokemon] = useState([])
	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon")
			.then((response) => {
				return response.data
			})

			//AXIOS USES MORE SPECIFIC IDENTIFIERS RATHER THAN FUNCTION
			//API only contains 20 pokemon...

			.then((response) => {
				setPokemon(response.results)
				console.log(response)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])
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
