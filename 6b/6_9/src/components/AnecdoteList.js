import { useDispatch, useSelector } from 'react-redux'
import { voteAnec } from '../reducers/anecdoteReducer'

const Anecdote = ({content, votes, handleVote}) => {
    return (
        <>
         <div>
            {content}
         </div>
         <div>
            has {votes}
            <button onClick = {handleVote}>vote</button>
         </div>
        </>
    )
}

const AnecdoteList = () => {

    const anecdotes = useSelector(state => {
        console.log('stateee', state)
        console.log('state.filter ', state.filter)
        if (state.filter == "ALL"){
            return state.anecdotes
        }
        return (state.filter !== 'ALL' ) 
            ? state.anecdotes.filter(con => con.content.includes(state.filter))
            : state.anecdotes

          
        //state.anecdotes)
    })

    const dispatch = useDispatch()

    const vote = (id) => {
        console.log('vote', id)
        dispatch(voteAnec(id))
    }



    return (
        <>
        {anecdotes
        .sort((a, b) => (a.votes <= b.votes) ? 1 : -1)
        .map(anecdote =>
        <Anecdote key={anecdote.id}
            content = {anecdote.content}
            votes = {anecdote.votes}
            handleVote={() => dispatch(vote(anecdote.id))}
        />
        )}

        </>
    )
}

export default AnecdoteList;
