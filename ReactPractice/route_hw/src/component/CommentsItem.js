import { useState, useEffect } from "react"
import { StyledComment } from "../Styles/StyledComment";

export const CommentsItem = ({ name }) => {
	const [dateTime, setDateTime] = useState(new Date());
	useEffect(() => {
		setDateTime(new Date());
	}, []);
	return (<StyledComment>
		<p >{name}</p>
		<p>Date {dateTime.toLocaleString()}</p>
	</StyledComment>
	)
}