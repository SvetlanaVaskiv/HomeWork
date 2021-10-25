import { SET_ERROR, START_LOADING, STOP_LOADING } from "../contacts/types"
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

export const loadingReducer = (state = false, { type }) => {

	switch (type) {
		case START_LOADING: {
			return true
		}
		case STOP_LOADING: {
			return false
		}
		default: {
			return state
		}
	}

}
export const errorReducer = (state = null, { type, payload }) => {

	switch (type) {
		case SET_ERROR: {
			return payload
		}

		default: {
			return state
		}
	}

}
