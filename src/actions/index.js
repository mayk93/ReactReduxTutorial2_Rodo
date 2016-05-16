export function selectBook(book) {
    // The returned action. That is, an action with a type property.
    return {
        type: "BOOK_SELECTED",
        payload: book
    };
}