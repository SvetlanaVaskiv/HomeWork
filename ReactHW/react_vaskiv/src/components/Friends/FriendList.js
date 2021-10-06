import React from "react";
import { ListItem, Span } from "./styleFriendList";
import PropTypes from 'prop-types';
const FriendItem = ({ avatar, name, isOnline }) => {
	const theme = { main: "green" }
	const theme1 = { main: "red" }
	const checkingTheStatus = isOnline ? theme : theme1;
	return (<>
		<ListItem>
			<Span theme={checkingTheStatus} />
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
	name: 'Name',
	avatar: '/Friends/image/slowInternet.png'
};
console.log(FriendItem.defaultProps)
FriendItem.propTypes = {
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
	avatar: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
}