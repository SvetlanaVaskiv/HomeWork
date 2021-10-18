import React from "react";
import { ListItem, StatusStyle } from "./styleFriendList";
import PropTypes from 'prop-types';


const FriendItem = ({ avatar, name, isOnline }) => {
	const statusStyleOnline = { main: "green" }
	const statusStyleOffline = { main: "red" }
	const checkingTheStatus = isOnline ? statusStyleOnline : statusStyleOffline;
	return (<>
		<ListItem>
			<StatusStyle statusStyleOnline={checkingTheStatus} />
			<img src={avatar} alt={name} width="200" />
			<h1>{name}</h1>

		</ListItem>
	</>
	)
}
export const FriendList = ({ friend }) => {
	const FriendsJsX = friend.map(({ name, id, isOnline, avatar }) => <FriendItem
		key={id}
		name={name}
		isOnline={isOnline}
		avatar={avatar}
	/>)
	return <ul>{FriendsJsX}</ul>
}

FriendItem.defaultProps = {
	friend: PropTypes.arrayOf(
		PropTypes.shape({
			name: 'Name',
			avatar: './image/slowInternet.png',
			id: 'number'
		})

	)

};
FriendList.propTypes = {
	friend: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			avatar: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired
		})
	)

}