export function addQuote() {
  return (dispatch) => {
    dispatch( {type: 'WAITING_QUOTE'});
    return fetch('http://localhost:3001/api/v1/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({quote: {blurb: quote.text, contributor: quote.author, category_id: quote.category_id}})
    }).then(res => res.json())
    .then(quote => dispatch({ type: 'ADD_QUOTE', quote: quote }))
    })
  }
}
