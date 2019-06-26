import React, { Component } from "react";
import { isParenthesizedExpression } from "@babel/types";

export class Search extends Component {
	state = {
		text: ""
	};

	onChangeHandler = e => {
		this.setState({ [e.target.name]: e.target.value }); // If we had text, email, etc in 'state' - we could still just use one onChange event handler by using the '[e.target.name]' as a key to map the right value to the right state variable
	};

	onSubmitHandler = e => {
		e.preventDefault();
		this.props.searchUsers(this.state.text);
		this.setState({ text: "" });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitHandler} className='form'>
					<input
						type='text'
						name='text'
						placeholder='Search Users...'
						value={this.state.text}
						onChange={this.onChangeHandler}
					/>
					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
					/>
				</form>
			</div>
		);
	}
}

export default Search;
