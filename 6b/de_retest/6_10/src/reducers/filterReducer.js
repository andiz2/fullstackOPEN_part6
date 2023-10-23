
const filterReducer = (state = 'ALL', action) => {
    switch (action.type){
      case  'SET_FILTER':
        console.log('payload filterReducer', action.payload)
        return typeof action.payload === 'undefined' ? null : action.payload
      default :
        return state
    }
}

export const filterChange = filter => {
    return {
        type: 'SET_FILTER',
        payload: filter,
    }
}

export default filterReducer