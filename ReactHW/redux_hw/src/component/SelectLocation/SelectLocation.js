
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { changeLocation } from '../../redux/form/action'

const options = [
	{ value: 'ukraine', label: 'UKRAINE' },
	{ value: 'us', label: "US" },
	{ value: 'france', label: "FRANCE" }
]
export const SelectLocation = () => {
	const dispatch = useDispatch()
	return (
		<Select options={options}
			onChange={(e) => dispatch(changeLocation(e.value))} />
	)
}