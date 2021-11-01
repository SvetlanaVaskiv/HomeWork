import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { TextField } from '@material-ui/core';
import { SelectLocation } from '../SelectLocation/SelectLocation'
import { setDataForm } from '../../redux/form/action';
import { addContacts } from '../../UserServer/UserServer';


export const Form = () => {
	const [valueName, setValueName] = useState('');
	const [valueNumber, setValueNumber] = useState('');
	const handleChangeName = (e) => setValueName(e.target.value);
	const handleChangeNumber = (e) => setValueNumber(e.target.value);
	const changeLocation = useSelector(state => state.contact.location)
	const contact = useSelector(state => state.contact.dataUser)
	const dispatch = useDispatch()
	const onSave = () => {
		const data = {
			name: valueName,
			id: uuidv4(),
			number: valueNumber,
			location: changeLocation,
		}
		dispatch(setDataForm(data))
		setValueName('')
		setValueNumber('')
		if (contact.find(item => item.number === valueNumber)) {
			toast.info(`${valueNumber} is already exist !`)
		} else {
			dispatch(addContacts(data))
		}

	}
	return (<	>
		<TextField id="filled-basic" label="Enter name" variant="standard" value={valueName} onChange={handleChangeName} />
		<TextField id="standard-basic" label="Enter number" variant="standard" value={valueNumber} type='number' onChange={handleChangeNumber} />
		<SelectLocation />
		<Button variant="contained" endIcon={<SendIcon />} onClick={onSave} type='submit'>
			Send
		</Button>
	</>
	)
}

