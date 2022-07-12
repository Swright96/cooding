import React from "react"
import "./App.css"
import Main from "./views/Main"
import { BrowserRouter, Routes, Router } from "react-router-dom"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route element={<Main />} path="/people" default />
					<Route element={<Detail />} path="/people/:id" />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
