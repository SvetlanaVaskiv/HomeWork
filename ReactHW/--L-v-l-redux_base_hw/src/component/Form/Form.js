import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// Components 

// Instruments
// Actions
import { ToastContainer, toast } from 'react-toastify';

import { addContacts } from '../../redux/form/action';
import { TextField } from '@material-ui/core';
import { SelectLocation } from '../SelectLocation/SelectLocation'
import { useFormik } from 'formik';
import { setDataForm } from '../../redux/form/action';



export const Form = ({ options }) => {


	const [valueName, setValueName] = useState('');
	const [valueNumber, setValueNumber] = useState('');

	const handleChangeName = (e) => setValueName(e.target.value);
	const handleChangeNumber = (e) => setValueNumber(e.target.value);
	const changeLocation = useSelector(state => state.dataForm.location)
	const dataList = useSelector(state => state.dataForm)
	const dispatch = useDispatch()

	const onSave = () => {
		const data = {
			name: valueName,
			id: uuidv4(),
			number: valueNumber,
			location: changeLocation
		}
		dispatch(setDataForm(data))
		setValueName('')
		setValueNumber('')
	}

	useEffect(() => {
		dispatch(addContacts())
	}, [dispatch])



	/*	const onSave = () => {
			// check the newContactObj 
			// if(existContact)
			toast.info(`09355444554 is already exist !`)
			// else 
			// dispatch(addContacts(fromFromFields))
		}*/

	return (<	>

		<TextField id="filled-basic" label="Enter name" variant="standard" value={valueName} onChange={handleChangeName} />
		<TextField id="standard-basic" label="Enter number" variant="standard" value={valueNumber} onChange={handleChangeNumber} />
		<SelectLocation />

		<Button variant="contained" endIcon={<SendIcon />} onClick={onSave} type='submit'>
			Send
		</Button>
	</>
	)
}