import { fillContacts, setErrorMessage, startLoading, stopLoading } from "../redux/contacts/actions"
import { setDataForm } from "../redux/form/action"

export const fetchContacts = () => (dispatch) => {
	dispatch(startLoading)
	return fetch('http://localhost:5005/contacts')
		.then(response => response.json())
		.then(data => dispatch(fillContacts(data)))
		.catch(error => dispatch(setErrorMessage(error)))
		.finally(() => dispatch(stopLoading))
}

export const addContacts = (data) => (dispatch) => {
	fetch('http://localhost:5005/contacts', {
		method: "POST",
		body: JSON.stringify(data),
		headers: { "Content-Type": "application/json" }
	}).then(response => response.json()
	).then(data => dispatch(setDataForm(data)))
}
