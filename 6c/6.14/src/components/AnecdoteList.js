import {voteOf } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import {setNotification} from '../reducers/notificationReducer'

const AnecdoteList = () => {

	const anecdotes = useSelector(({filter, anecdotes}) => {
		if (filter === ''){
			return anecdotes
		}
		return filter !== '' 
		 ? anecdotes.filter( anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
		 : anecdotes
	})
    const dispatch = useDispatch()

	const vote = (id) => {
	    console.log('vote', id)
	    dispatch(voteOf(id))
	  }
	  //console.log('anecdotes', anecdotes)
	return (
		<div>
		  <h2>Anecdotes</h2>
	      {anecdotes.map(anecdote =>
	        <div key={anecdote.id}>
	          <div>
	            {anecdote.content}
	          </div>
	          <div>
	            has {anecdote.votes}
	            <button onClick={() => {vote(anecdote.id)}}>vote</button>
	          </div>
	        </div>
	      )}
		</div>
	)
}

export default AnecdoteList