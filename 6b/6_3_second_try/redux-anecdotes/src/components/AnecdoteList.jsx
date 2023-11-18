import {voteAnec} from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const Anecdote = ({anecdote, handleVote}) => {
    return (
        <div>
            {anecdote.content} <br />
            has {anecdote.votes}
            <button onClick = {handleVote}> vote </button>
        </div>
    )
}

const AnecdoteList = () => {

    const anecdotes = useSelector(state => {
      if(state.filter === "ALL") {
        return state.anecdotes
      }
      return state.filter === '' || typeof state.filter === 'undefined'
        ? state.anecdotes.filter(el => el.content.toLowerCase().includes(state.filter.toLowerCase())) 
        : state.anecdotes
     
    })
    const dispatch = useDispatch()

    return (
        <div>
          <h2>Anecdotes</h2>
          {anecdotes.sort((a,b) => (b.votes - a.votes)).map(anecdote =>
            <Anecdote
              key = {anecdote.id}
              anecdote = {anecdote}
              handleVote = {() => dispatch(voteAnec(anecdote.id))}
            />
          )}
        </div>
    )
}

export default AnecdoteList