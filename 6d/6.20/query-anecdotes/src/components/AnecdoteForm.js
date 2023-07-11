import { createAnecdote, getAnecdotes } from '../requests'
import { useQuery, useMutation, useQueryClient } from 'react-query'

const AnecdoteForm = () => {

  const queryClient = useQueryClient()

    const result = useQuery(
     'anecdotes',
      getAnecdotes,
      {
        retry: 1
      }
    )

    const anecdotes = result.data


   const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdote = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
    },
  })


  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
