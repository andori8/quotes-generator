export function fetchCategoryQuotes(id) {
  return (dispatch) => {
    dispatch( {type: 'WAITING_QUOTE'});
    return fetch(`https://quotes-generator-api.herokuapp.com/api/v1/show/${id}`)
    .then(res => res.json())
    .then(quotes => dispatch({ type: 'FETCH_CATEGORY_QUOTES', quote: quotes }))
    }
}
