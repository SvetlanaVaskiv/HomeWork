import { useState, useEffect } from "react"
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

export const NoteItem = ({ id, name, onDelete, onUpdate, onCompleted, completed }) => {
	const [value, setValue] = useState(name);
	const [isEditable, setIsEditable] = useState(false);
	const styles = { textDecoration: completed ? 'line-through' : 'none' }
	const [dateTime, setDateTime] = useState(new Date());

	useEffect(() => {
		setDateTime(new Date());

	}, []);


	const onDeleteItem = () => {
		onDelete(id)
	}
	const onUpdateItem = () => {
		onUpdate(id, value)
		setIsEditable(false)
		setDateTime(new Date())
	}

	const onCompletedItem = () => {
		onCompleted(id, completed)
	}


	return (
		<Card key={id} sx={{ margin: 3, padding: 2, }}>
			{isEditable ?
				<TextField fullWidth variant='outlined' value={value} onChange={(e) => setValue(e.target.value)} />
				:
				<p style={styles}>{name} <span>Date {dateTime.toLocaleString()}</span> </p>}

			<Button size='small' onClick={onDeleteItem}>{''} delete</Button>
			<Checkbox checked={completed} onChange={onCompletedItem} />
			{isEditable ? <Button size='small' onClick={onUpdateItem}> SAVE </Button>
				: <Button size='small' onClick={() => setIsEditable(true)}>{''} EDIT</Button>
			}

		</Card>
	)
}