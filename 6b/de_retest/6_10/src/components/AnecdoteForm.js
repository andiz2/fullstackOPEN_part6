import { useDispatch } from 'react-redux'
//import { createAnec }   from '../reducers/anecdoteReducer'
import anecdoteReducer, { createAnecdote_toolkit, voteAnecdote_toolkit } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    
    const addAnec = (event) => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        dispatch(createAnecdote_toolkit(content))
    }

    return (
        <>
        <h2>create new</h2>
        <form onSubmit = {addAnec}>
          <div><input name = "anec"/></div>
          <button type = "submit">create</button>
        </form>
        </>
    )
}

export default AnecdoteForm;