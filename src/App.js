import React, { Component } from 'react'
import './App.css'
// import PostList from './PostList'
import PostForm from './PostForm'

class App extends Component {
	render() {
		return (
			<div className="App">
				<PostForm />
				{/* <PostList /> */}
			</div>
		)
	}
}

export default App
