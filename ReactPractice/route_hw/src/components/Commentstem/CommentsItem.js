import { useState, useEffect } from "react"
import { StyledComment } from "./StyledComment";

export const CommentsItem = ({ name, date, id }) => {

	return (<StyledComment key={id}>
		<p >{name}</p>
		<p>Date {date}</p>
	</StyledComment>
	)
}