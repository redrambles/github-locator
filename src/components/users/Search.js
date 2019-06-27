import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
	state = {
		text: ""
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired,
		setAlert: PropTypes.func.isRequired
	};

	onChangeHandler = e => {
		this.setState({ [e.target.name]: e.target.value }); // If we had text, email, etc in 'state' - we could still just use one onChange event handler by using the '[e.target.name]' as a key to map the right value to the right state variable
	};

	onSubmitHandler = e => {
		e.preventDefault();
		if (this.state.text === "") {
			console.log("nothing in text");
			this.props.setAlert("Please enter something", "light");
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({ text: "" });
		}
	};

	render() {
		const { showClear, clearUsers } = this.props;

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
				{showClear && (
					<button className='btn btn-light btn-block' onClick={clearUsers}>
						Clear
					</button>
				)}
			</div>
		);
	}
}

export default Search;
