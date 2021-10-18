import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { ButtonStyle } from "../Styles/StyleBtn";
import { CommentsItem } from "./CommentsItem";

export const CommentsList = () => {
	const [list, setList] = useState([]);
	const [value, setValue] = useState('')
	const handleChange = (e) => setValue(e.target.value)

	const onSave = () => {
		const data = {
			name: value,
		}
		setList((prevState) => [...prevState, data])
		setValue('')
	}
	return (
		<div style={{ width: 800, margin: '0 auto', backgroundColor: '#dcdae2', borderRadius: '12px' }}>
			<Box component='from' >
				<TextField fullWidth label="Send your comment" variant="outlined" value={value} onChange={handleChange} color="secondary" />
				<ButtonStyle disabled={value.length < 1} fullWidth variant="contained" onClick={onSave} >SEND</ButtonStyle>
			</Box>
			<div>
			</div>
			{
				list && list.map(item => <CommentsItem
					name={item.name}
				/>)
			}
		</div>
	)
}