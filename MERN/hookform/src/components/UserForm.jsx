import React, { useState } from "react"

const UserForm = (props) => {
	const [firstName, setFirstName] = useState("")
	const [firstNameError, setFirstNameError] = useState("")
	const [lastName, setLastName] = useState("")
	const [lastNameError, setLastNameError] = useState("")
	const [email, setEmail] = useState("")
	const [emailError, setEmailError] = useState("")
	const [password, setPassword] = useState("")
	const [passwordError, setPasswordError] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [confirmPasswordError, setConfirmPasswordError] = useState("")
	// const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

	const validateFirstName = (e) => {
		setFirstName(e.target.value)
		if (e.target.value.length < 2) {
			setFirstNameError("First Name must be at least two characters!")
		} else {
			setFirstNameError("")
		}
	}
	const validateLastName = (e) => {
		setLastName(e.target.value)
		if (e.target.value.length < 2) {
			setLastNameError("Last Name must be at least two characters!")
		} else {
			setLastNameError("")
		}
	}
	const validateEmail = (e) => {
		setEmail(e.target.value)
		if (e.target.value.length < 5) {
			setEmailError("Email must be at least five characters!")
		} else {
			setEmailError("")
		}
	}
	const validatePassword = (e) => {
		setPassword(e.target.value)
		if (e.target.value.length < 8) {
			setPasswordError("Password must be at least 8 characters!")
		} else {
			setPasswordError("")
		}
	}
	const validateConfirmPassword = (e) => {
		setConfirmPassword(e.target.value)
		if (e.target.value !== password) {
			setConfirmPasswordError("Passwords must match!")
		} else {
			setConfirmPasswordError("")
		}
	}

	const createUser = (e) => {
		e.preventDefault()
	}

	return (
		<div>
			<form onSubmit={createUser}>
				<div>
					<label>First Name: </label>
					<input
						type="text"
						onChange={validateFirstName}
						value={firstName}
					/>
					<p>{firstNameError}</p>
				</div>
				<div>
					<label>Last Name: </label>
					<input
						type="text"
						onChange={validateLastName}
						value={lastName}
					/>
					<p>{lastNameError}</p>
				</div>
				<div>
					<label>Email: </label>
					<input type="text" onChange={validateEmail} value={email} />
					<p>{emailError}</p>
				</div>
				<div>
					<label>Password: </label>
					<input
						type="password"
						onChange={validatePassword}
						value={password}
					/>
					<p>{passwordError}</p>
				</div>
				<div>
					<label>Confirm Password: </label>
					<input
						type="password"
						onChange={validateConfirmPassword}
						value={confirmPassword}
					/>
					<p>{confirmPasswordError}</p>
				</div>
				<input type="submit" value="Create User" />
			</form>
			<div>
				<p>First Name: {firstName}</p>
				<p>Last Name: {lastName}</p>
				<p>Email: {email}</p>
				<p>Password: {password}</p>
				<p>Confirm Password: {confirmPassword}</p>
			</div>
		</div>
	)
}

export default UserForm
