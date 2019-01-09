export function fetchAllQuotes() {
  return (dispatch) => {
    dispatch( {type: 'WAITING_QUOTE'});
    return fetch('http://localhost:3001/api/v1/all')
    .then(res => res.json())
    .then(quotes => dispatch({ type: 'FETCH_QUOTES', quote: quotes }))
    }
}
