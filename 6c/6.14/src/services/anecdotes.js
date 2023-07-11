import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes:0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const voteAnec = async (action) => {
	console.log('action', action)
	const idA = action
    const anecdotes =  getAll() //.find( a => a.id === idA)
    console.log('anecdotes', anecdotes)
    const myAnec = anecdotes.then(anecdotesP => {
    	console.log('din promise', anecdotesP)
    	const anecTC = anecdotesP.find( a => a.id === idA)
    	console.log('anecTc', anecTC)
    	const changedAnecdote = {
       		...anecTC,
        	votes: anecTC.votes + 1
   		 }
   		console.log("cA", changedAnecdote)
   		console.log('response2', anecdotes)
   		const requestt = anecdotesP.map(anecdote => anecdote.id !== idA ? anecdote : changedAnecdote)
   		console.log('requestt', requestt)
   		const request = axios.put(`${baseUrl}/${changedAnecdote.id}`, changedAnecdote)
   	    return request.then(response => response.data)
   		
   	 })//
    //console.log("myAnec", myAnec.data)
    //console.log('changed', changedAnecdote)
    //return changedAnecdote
}

export default { 
	getAll,
	createNew,
	voteAnec,
 }