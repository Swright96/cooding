import "./App.css"
import PersonCard from "./components/PersonCard"

function App() {
	return (
		<div className="App">
			<PersonCard
				firstName={"Jane"}
				lastName={"Doe"}
				Age={"60"}
				hairColor={"black"}
			/>
			<PersonCard
				firstName={"Jess"}
				lastName={"Wright"}
				Age={"23"}
				hairColor={"blonde"}
			/>
			<PersonCard
				firstName={"Ezekiel"}
				lastName={"Dominguez"}
				Age={"9"}
				hairColor={"red"}
			/>
			<PersonCard
				firstName={"Ariel"}
				lastName={"Dominguez"}
				Age={"11"}
				hairColor={"brown"}
			/>
		</div>
	)
}

export default App
