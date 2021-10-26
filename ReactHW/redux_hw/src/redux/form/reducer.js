import { CHANGE_LOCATION, SET_DATA_FORM } from "./types"

export const changeLocationReducer = (state = [], { type, payload }) => {
	switch (type) {
		case CHANGE_LOCATION: {
			return payload
		}
		default: {
			return state
		}
	}
}
export const dataFormReducer = (state = [], { type, payload }) => {
	switch (type) {
		case SET_DATA_FORM: {
			return [...state, payload]
		}
		default: {
			return state
		}
	}
}