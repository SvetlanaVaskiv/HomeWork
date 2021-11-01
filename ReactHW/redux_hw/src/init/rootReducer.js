// Core
import { combineReducers } from 'redux'
import { contactReducer, errorReducer, loadingReducer } from '../redux/contacts/reducer';
import { dataFormReducer, changeLocationReducer } from '../redux/form/reducer';

const dataUserRootReducer = combineReducers({
	dataUser: dataFormReducer,
	location: changeLocationReducer
})
const contactListReducer = combineReducers({
	isLoading: loadingReducer,
	error: errorReducer,
	contacts: contactReducer,
})
// Reducers
export const rootReducer = combineReducers({
	contactsList: contactListReducer,
	contact: dataUserRootReducer
});
