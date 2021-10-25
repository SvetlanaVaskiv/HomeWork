import { FILL_CONTACTS, POST_CONTACT, SET_ERROR, START_LOADING, STOP_LOADING } from "./types"

const initState = {
	list: [],
	isLoading: false,
	error: null
}

export const contactReducer = (state = initState, { type, payload }) => {

	switch (type) {
		case FILL_CONTACTS: {
			return payload
		}
		default: {
			return state
		}
	}

}

export const addContactReducer = (state = [], { type, payload }) => {
	switch (type) {
		case POST_CONTACT: {
			return payload
		} default: {
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
