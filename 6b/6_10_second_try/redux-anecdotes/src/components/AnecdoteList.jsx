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
      console.log('-----filter anc firstt', state.filter)
      if(state.filter === "ALL") {
        return state.anecdotes
      }
      return (state.filter.length > 0 )
        ? state.anecdotes.filter(el => el.content.toLowerCase().includes(state.filter.toLowerCase())) 
        : state.anecdotes
     
    })
    const dispatch = useDispatch()

    console.log('err1', anecdotes)
    //for anecdotes.sort((a,b))... we cannot operate directly on the state
    //we need to create a copy with anecdotes.slice() or with the [...] spread ope
    //rator or with the help of store state = store.getState() const getItems = 
    //state => state.user.items const items = getItems(state) 
    //items.sort((a, b) => a.order - b.order)
    return (
        <div>
          <h2>Anecdotes</h2>
          {anecdotes.slice().sort((a,b) => (b.votes - a.votes)).map(anecdote =>
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