import React, { useState } from "react"

const Todo = (props) => {
	const [newTodo, setNewTodo] = useState("")
	const [todoList, setTodoList] = useState([])

	const handleNewTodoSubmit = (e) => {
		e.preventDefault()

		const todoItem = {
			text: newTodo,
			complete: false,
		}

		//set in a new array the current list of todos AND the additional todo
		setTodoList([...todoList, todoItem])
		setNewTodo("")
	}

	const handleTodoDelete = (delIdx) => {
		const filteredTodos = todoList.filter((todoList, i) => {
			return i !== delIdx
		})
		setTodoList(filteredTodos)
	}

	const handleToggleTodo = (idx) => {
		const updatedTodo = todoList.map((todoList, i) => {
			if (idx === i) {
				todoList.complete = !todoList.complete
			}
			return todoList
		})
		setTodoList(updatedTodo)
	}

	return (
		<div>
			<form
				onSubmit={(e) => {
					handleNewTodoSubmit(e)
				}}
			>
				<input
					onChange={(e) => {
						setNewTodo(e.target.value)
					}}
					type="text"
					value={newTodo}
				/>
				<div>
					<button>Add</button>
				</div>
			</form>
			{todoList.map((todoList, i) => {
				const todoClasses = ["bold"]

				if (todoList.complete) {
					todoClasses.push("strike-through")
				}

				return (
					<div key={i}>
						<input
							onChange={(e) => handleToggleTodo(i)}
							checked={todoList.complete}
							type="checkbox"
						/>
						<span className={todoClasses.join(" ")}>
							{todoList.text}
						</span>
						<button
							style={{ marginLeft: "10px" }}
							onClick={(e) => {
								handleTodoDelete(i)
							}}
						>
							Delete
						</button>
					</div>
				)
			})}
		</div>
	)
}

export default Todo
