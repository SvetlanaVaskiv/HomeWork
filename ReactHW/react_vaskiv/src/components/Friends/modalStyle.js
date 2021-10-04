import React from "react";
import styled from "styled-components";



const FriendItem = ({ avatar, name, isOnline }) => {
	const Span1 = styled.span`
	width: 50px; 
	height: 50px;
	margin: 0 15px;
  border-radius: 50%;
	background-color:  ${props => props.theme.main};

`;
	const Span2 = styled.span`
	width: 50px; 
	height: 50px;
	margin: 0 15px;
  border-radius: 50%;
	background-color:  #363;

`;
	const theme = {
		main: "green"
	}
	const theme1 = {
		main: "red"
	}
	const checkingTheStatus = isOnline ? theme : theme1;

	return (<>
		<li>
			<Span1 theme={checkingTheStatus} />

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