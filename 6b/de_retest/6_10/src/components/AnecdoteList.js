import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote_toolkit } from '../reducers/anecdoteReducer'

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
    const dispatch = useDispatch()
    const anecdotes = useSelector(({filter, anecdotes}) => {
        if( filter === 'ALL' ){
            return anecdotes
        }
        return filter !== 'ALL' 
        ? anecdotes.filter( anec => anec.content.includes(filter))
        : anecdotes
    })


    const vote = (id) => {
        console.log('vote', id)
        dispatch(voteAnecdote_toolkit(id))
    }

    console.log('anecdotes list', anecdotes)

    return (
        <>
        {[...anecdotes]
        .sort((a, b) => (a.votes <= b.votes) ? 1 : -1)
        .map(anecdote =>
        <Anecdote key={anecdote.id}
            content = {anecdote.content}
            votes = {anecdote.votes}
            handleVote={() => vote(anecdote.id)}
        />
        )}

        </>
    )
}

export default AnecdoteList;
