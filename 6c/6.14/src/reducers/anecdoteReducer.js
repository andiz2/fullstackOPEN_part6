import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.sort((a, b) => b.votes - a.votes).map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      state.push({
        content,
        id: getId(),
        votes: 0
      })
    },
    voteOf(state, action) {
      const idA = action.payload
      const anecdoteToChange = state.find( a => a.id === idA)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      console.log('reducer', JSON.parse(JSON.stringify(state)))
      return state.map(anecdote => 
        anecdote.id !== idA ? anecdote: changedAnecdote)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action){
      return action.payload
    }
  }
})

//!!!!!!!!!!!!!!!!!!!!!!! -------------- OLD REDUCER ------------------ !!!!!!!!!!!!!!!!!!!!!!!//

// const reducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//   console.log('action', action)
//   switch(action.type){
//   case 'VOTE':
//     const id = action.payload.id
//     const anecdoteToChange = state.find(a => a.id === id)
//     const changedAnecdote = {
//       ...anecdoteToChange,
//       votes: anecdoteToChange.votes + 1
//     }
//     return state.map(anecdote => 
//       anecdote.id !== id ? anecdote : changedAnecdote )
//   case 'NEW_ANECDOTE':
//     return [...state, action.payload]

//   default:
//     return state
//   }
// }
/////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////-----------------ACTIONS----------------!!!!!!!!?//////////////////
// export const voteOf = (id) => {
//   return {
//     type: 'VOTE',
//     payload: {id}
//   }
// }

// export const createAnecdote = (content) => {
//   return {
//     type: 'NEW_ANECDOTE',
//       payload: {
//         content,
//         votes: 0,
//         id: getId()
//       }
//   }
// }
//////////////////////////////////////////////////////////////////////////////////////////////

export const {createAnecdote, voteOf, appendAnecdote, setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer