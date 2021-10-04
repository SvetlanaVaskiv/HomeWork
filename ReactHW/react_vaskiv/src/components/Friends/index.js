import React, { useState } from "react";
import { Status } from "./modalStyle";

const FriendItem = ({ avatar, name, isOnline }) => {
	const checkingTheStatus = isOnline ? Status.color === '#C33' : '#363';

	return (<>
		<li>
			<Status className={checkingTheStatus} />
			<img src={avatar} alt={name} width="200" />
			<h1>{name}</h1>

		</li>
	</>

	)
}
console.log(Status)
export const FriendList = ({ friend }) => {



	const FriendsJsX = friend.map(({ name, id, isOnline, avatar }) => <FriendItem
		key={id}
		name={name}
		isOnline={isOnline}
		avatar={avatar}

	/>)
	return <ul>{FriendsJsX}</ul>

}