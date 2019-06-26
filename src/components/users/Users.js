import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
	const userStyle = {
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		gridGap: "1rem"
	};

	if (loading) {
		return <Spinner />;
	} else {
		const UserList = users.map(user => {
			return <UserItem user={user} key={user.id} />;
		});
		return <div style={userStyle}>{UserList}</div>;
	}
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
};

export default Users;
