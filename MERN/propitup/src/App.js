import "./App.css"
import PersonCard from "./components/PersonCard"

function App() {
	return (
		<div className="App">
			<PersonCard
				firstName={"Jane"}
				lastName={"Doe"}
				age={60}
				hairColor={"black"}
			/>
			<PersonCard
				firstName={"Jess"}
				lastName={"Wright"}
				age={23}
				hairColor={"blonde"}
			/>
			<PersonCard
				firstName={"Ezekiel"}
				lastName={"Dominguez"}
				age={9}
				hairColor={"red"}
			/>
			<PersonCard
				firstName={"Ariel"}
				lastName={"Dominguez"}
				age={11}
				hairColor={"brown"}
			/>
		</div>
	)
}

export default App
