import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getAnecdotes, createAnecdote, updateAnecdote } from './requests'
import axios from 'axios'

const App = () => {

  const queryClient = useQueryClient()


  // const addAnecdote = async (event) => {
  //   event.preventDefault()
  //   const content = event.target.anecdote.value
  //   event.target.anecdote.value = ''
  //   newAnecdoteMutation.mutate({content, votes: 2})
  // }

  const updateAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    },
  })


  const result = useQuery(
    'anecdotes',
    getAnecdotes,
    {
      retry: 1
    }
  )
  console.log(result)

  if(result.isLoading) {
    return <div> loading data... </div>
  }

  if(result.isError) {
    return <div> anecdote service not available due to problems in server </div>
  }

  const anecdotes = result.data

  const handleVote = (anecdote) => {
    console.log('anecdote', anecdote)
    updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
  }

  


  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
