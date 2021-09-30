import React, { useState } from "react";

const FriendItem = ({ avatar, name, isOnline }) => {
	return (<>

		<li>
			<span className="span" style={{ background: "red" }}>{isOnline}</span>

			<img src={avatar} alt={name} width="200" />
			<h1>{name}</h1>

		</li>
	</>
	)

}

export const FriendList = ({ friend, isOnline }) => {


	const [online, setOnline] = useState(friend)
	const available = (offline) => {

		const newList = online.filter(item => item.isOnline ? isOnline : offline)
		setOnline(newList)
		console.log(newList)
	}

	const FriendsJsX = friend.map(({ name, id, isOnline, avatar }) => <FriendItem
		key={id}
		name={name}
		isOnline={isOnline}
		avatar={avatar}
		available={available}
	/>)
	return <ul>{FriendsJsX}</ul>
}