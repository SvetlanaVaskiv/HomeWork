import { CHANGE_LOCATION, SET_DATA_FORM } from "./types"


export const changeLocation = (value) => {

	return {
		type: CHANGE_LOCATION,
		payload: value,
	}
}

export const setDataForm = (data) => {
	return {
		type: SET_DATA_FORM,
		payload: data
	}
}

export const addContacts = (setDataForm) => (dispatch) => {
	fetch('http://localhost:5005/contacts', {
		method: "POST",
		body: JSON.stringify(setDataForm),
		headers: { "Content-Type": "application/json" }
	}).then(response => response.json()
	).then(data => dispatch(setDataForm(data))) // response need to add to the GlobalSState ( [...prevState, data])
}
