import { setFilter } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'



const Filter = (props) => {
	const dispatch = useDispatch()
	
	const handleChange = (event) => {
		// input-field value is in variable event.target.value
		const input = event.target.value
		console.log(setFilter(input))
		dispatch(setFilter(input))
	}

	const style = {
		marginBottom: 10
	}

	

	return (
		<div style = {style}>
			filter <input onChange = {handleChange} />
		</div>
	)
}

export default Filter