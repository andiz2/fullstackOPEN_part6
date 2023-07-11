import useDispatch from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

const newAnecdote = (props) => {
	const dispatch = useDispatch()

	const addAnecdote = async (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		//const newAnecdote = await anecdoteService.createNew(content)
		dispatch(createAnecdote(content))
	}

	return (
		<form onSubmit = {addAnecdote}>
			<input name = "anecdote" />
			<button type = "submit"> add </button>
		</form>
	)
}

export default newAnecdote