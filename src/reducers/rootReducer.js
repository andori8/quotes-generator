function rootReducer(state = [], action) {
  switch (action.type) {
    case 'WAITING_QUOTE':
      return state;
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'FETCH_RANDOM_QUOTE':
      return action.quote
    case 'FETCH_CATEGORY_QUOTES':
      return action.quote
    default:
      return state;
  }
}

export default rootReducer;
