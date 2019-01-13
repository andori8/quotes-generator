export function fetchRandomQuote() {
  return (dispatch) => {
    dispatch( {type: 'WAITING_QUOTE'});
    return fetch('https://quotes-generator-app.herokuapp.com/api/v1/random')
    .then(res => res.json())
    .then(quote => dispatch({ type: 'FETCH_RANDOM_QUOTE', quote: quote }))
    }
}
