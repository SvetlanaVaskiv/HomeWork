import React, { useState } from "react";

const FriendItem = ({ avatar, name, isOnline }) => {
	const online = { color: 'red' };
	const offline = { color: "green" }
	return (<>

		<li>
			<span style={isOnline ? online : offline}> </span>
			<img src={avatar} alt={name} width="200" />
			<h1>{name}</h1>

		</li>
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