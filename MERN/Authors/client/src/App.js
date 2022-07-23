import React from "react"
import Main from "./views/Main"
import CreateAuthor from "./components/CreateAuthor"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import AuthorUpdate from "./components/AuthorUpdate"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route element={<Main />} path="/author" default />
					<Route element={<CreateAuthor />} path="/author/new" />
					<Route element={<AuthorUpdate />} path="/author/edit/:id" />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
