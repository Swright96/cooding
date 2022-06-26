import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./components"
import Page from "./components/page"
import Hello from "./components/hello"
import Coloredhello from "./components/coloredhello"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/home" element={<Index />} />
					<Route path="/4" element={<Page />} />
					<Route path="/hello" element={<Hello />} />
					<Route path="/hello/blue/red" element={<Coloredhello />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
