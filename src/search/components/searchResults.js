import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
    const renderRows = () => {
        const books = props.books || []
        const imageFail = "http://andrewcmaxwell.com/wp-content/themes/acm_2014/images/book_not_found.png"
        const getNestedObject = (nestedObj, pathArr) => {
            return pathArr.reduce((obj, key) =>
                (obj && obj[key] !== 'undefined') ? obj[key] : imageFail, nestedObj);
        }

        return books.map(book => (
            <div key={book.id} className="card mb-3 shadow-sm">
                <Link to={`/books/${book.id}`}>
                    <img className="rounded book-cover" src={getNestedObject(book, ['imageLinks', 'thumbnail'])} alt="Card image cap" />
                </Link>
                <div className="card-body">
                    <h6 className="card-title">{book.title}</h6>
                    <div className="book-authors">
                        {book.authors !== undefined && (
                            book.authors.map((author, i) => (
                                <li key={i}>{author}</li>
                            ))
                        )}
                    </div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(e) => props.onChangeShelf(e, book)}>
                            <option value="" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <section className='book-shelfs'>
            <div className="card-deck mb-3">
                {renderRows()}
            </div>
        </section>
    )
}


