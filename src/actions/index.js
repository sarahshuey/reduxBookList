
//select book is an action creator, it will need an action type
export function selectBook(book) {
console.log(`Book: ${book.title}`);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
