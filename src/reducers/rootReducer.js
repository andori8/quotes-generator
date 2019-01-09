function rootReducer(state = [], action) {
  switch (action.type) {
    case 'UPDATING_QUOTE':
      return state;
    case 'ADD_QUOTE':
      return [...state, action.quote]
    default:
      return state;
  }
}

export default rootReducer;
