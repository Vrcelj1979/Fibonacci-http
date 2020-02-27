import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			fibidx: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://127.0.0.1:8000', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { fibidx } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<p>This is Guru test for Fibonacci number</p>
					<div>
						<input
							type="number"
							name="fibidx"
							value={fibidx}
							onChange={this.changeHandler}
							placeholder="Enter Fibonacci number"
						/>
					</div>
					<br></br>
					<button type="submit">Submit</button>
				</form>
				<p>Result of Fibonacci sequence</p>
				<input placeholder="Result"></input>
			</div>
		)
	}
}

export default PostForm