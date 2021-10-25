import { useSelector } from "react-redux"
import { setDataForm } from "../form/action"
import { FILL_CONTACTS, POST_CONTACT, SET_ERROR, START_LOADING, STOP_LOADING } from "./types"



// Sync
export const fillContacts = (data) => {
	return {
		type: FILL_CONTACTS,
		payload: data
	}

}
export const addContactsNew = (data) => {
	return {
		type: POST_CONTACT,
		payload: data
	}

}
export const setErrorMessage = () => ({
	type: SET_ERROR,
	payload: "NOT FOUND"
})
export const startLoading = {
	type: START_LOADING,
}
export const stopLoading = {
	type: STOP_LOADING,
}

// Async
export const fetchContacts = () => (dispatch) => {
	dispatch(startLoading)
	return fetch('http://localhost:5005/contacts')
		.then(response => response.json())
		.then(data => dispatch(fillContacts(data)))
		.catch(error => dispatch(setErrorMessage(error)))
		.finally(() => dispatch(stopLoading))
}

// Async
