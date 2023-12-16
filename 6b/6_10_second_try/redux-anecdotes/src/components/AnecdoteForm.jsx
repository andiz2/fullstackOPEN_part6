import {createAnec} from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { notificationShow, notificationHide } from '../reducers/notificationReducer';

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnec(content))

        // Display notification for 5 seconds
        dispatch(notificationShow(`New anecdote added: "${content}"`));

        // Automatically remove the notification after 5 seconds
        setTimeout(() => {
          dispatch(notificationHide());
        }, 5000);
      }

    return (
      <>
        <h2>create new</h2>
        <form onSubmit = {addAnecdote}>
          <div><input name = "anecdote"/></div>
          <button type = "submit">create</button>
        </form>
      </>
    )
}

export default AnecdoteForm;