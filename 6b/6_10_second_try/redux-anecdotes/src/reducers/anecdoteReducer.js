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

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    createAnec(state, action) {
      const content = action.payload
      state.push(asObject(content))
      /*state.push({
        content,
        id: getId(),
        votes:0
      })*/
    },
    voteAnec(state, action) {
      console.log('mda')
      const id = action.payload
      console.log('here')
      const anecdoteToVote = state.find( n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }

      console.log('state anec', JSON.parse(JSON.stringify(state)))

      return state.map( anec =>
        anec.id !== id ? anec : changedAnecdote    
      )
    }

    
  }
})

export const { createAnec, voteAnec } = anecdoteSlice.actions
export default anecdoteSlice.reducer

/*
const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action anecR', action)
  switch(action.type){
    case 'VOTE':
      const id = action.payload.id
      const anecToVote = state.find(a => a.id === id)
      console.log('aTV', anecToVote.votes)
      const changedAnec = {
        ...anecToVote,
        votes: anecToVote.votes + 1
      }
      console.log('cA', changedAnec.votes)
      return state.map( anec =>
         anec.id !==id ? anec : changedAnec)
    case 'NEW_ANEC':
      return [...state, action.payload]
    default:
      return state
  }
}

export const voteAnec = (id) => {
  return {
    type: 'VOTE',
    payload : {
      id
    }
  }
}

export const createAnec = (content) => {
  return {
    type: 'NEW_ANEC',
    payload : {
      content,
      id: getId(),
      votes: 0
    }
  }
}


export default reducer
*/

