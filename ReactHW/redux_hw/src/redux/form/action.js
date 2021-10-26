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
