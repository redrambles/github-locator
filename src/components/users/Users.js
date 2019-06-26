import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
	userStyle = {
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		gridGap: "1rem"
	};

	render() {
		const UserList = this.props.users.map(user => {
			return <UserItem user={user} key={user.id} />;
		});
		return <div style={this.userStyle}>{UserList}</div>;
	}
}

export default Users;
