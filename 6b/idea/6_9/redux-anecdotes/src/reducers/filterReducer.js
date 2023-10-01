const filterReducer = (state = 'ALL', action) => {
    switch (action.type){
      case  'SET_FILTER':
        console.log('action filter', action.payload)
        if (action.payload !== ''){
            return state.map(init => init.content).filter(con => con.includes(action.payload))
          }
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