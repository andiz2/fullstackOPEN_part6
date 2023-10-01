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
export const createAnec = (content) => {
  return {
    type: 'NEW_ANEC',
    payload: {
      content,
      votes: 0,
      id: getId()
    }
  }
}

export const voteAnec = (id) => {
  return {
    type: 'VOTE_ANEC',
    payload: {id}
  }
}

//const initialState = anecdotesAtStart.map(asObject)

const initialState = [
  {
      "content": "If it hurts, do it more often",
      "id": "9794",
      "votes": 0
  },
  {
      "content": "Adding manpower to a late software project makes it later!",
      "id": "79262",
      "votes": 0
  },
  {
      "content": "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      "id": "51696",
      "votes": 0
  },
  {
      "content": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      "id": "24751",
      "votes": 0
  },
  {
      "content": "Premature optimization is the root of all evil.",
      "id": "62053",
      "votes": 0
  },
  {
      "content": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      "id": "57880",
      "votes": 0
  }
]

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type){
    case 'NEW_ANEC':
      return state.concat({...action.payload, id: getId()})
    case 'VOTE_ANEC':
      let voteToChange = state.find(n => n.id === action.payload.id)
      console.log('voteToChange app', voteToChange)
      voteToChange = {...voteToChange, votes: voteToChange.votes + 1}
      console.log('voteToChange app2', voteToChange)
      console.log('state', state)
      return state.map(anec => 
        anec.id !== action.payload.id ? anec : voteToChange
        )
    case 'FILTER':
      if (action.payload !== ''){
        return state.map(init => init.content).filter(con => con.includes(action.payload))
      }
        
  }

  return state
}


export default anecdoteReducer