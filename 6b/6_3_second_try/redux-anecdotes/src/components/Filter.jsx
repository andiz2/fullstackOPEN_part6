import {useDispatch, useSelector} from 'react-redux'
import {filterChange} from '../reducers/filterReducer'

const Filter = (props) => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)

    const handleChange = (event) => {
      // input-field value is in variable event.target.value
      //event.preventDefault()
      const content = event.target.value
      dispatch(filterChange(content))
      //event.target.value = ''
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter