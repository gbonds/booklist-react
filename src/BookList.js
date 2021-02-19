import { allBooks } from './allBooks';
// if importing a JS file, don't need extension like you do for CSS file
import Book from './Book';

const BookList = () => {
    return (
        <section className="BookList">
            {allBooks.map((book) => {
                return (
                    <Book key={book.id} {...book}></Book>
                    // spread operator '...' breaks out all the props
                )
            })}
        </section>
    )
}

export default BookList
