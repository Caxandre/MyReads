import React from 'react'
import { Link } from 'react-router-dom'
import ShelfHeader from './shelfHeader'

export default props => {
    const renderShelf = () => {
        return props.shelfs.map(shelf => (
            <section key={shelf}>
                <ShelfHeader shelf={shelf} />
                <div className="card-deck mb-3">
                    {props.books.map(book => (
                        book.shelf === shelf && (
                            <div key={book.id} className="card mb-3 shadow-sm">
                                <Link to={`/books/${book.id}`}>
                                    <img className="rounded book-cover" src={book.imageLinks.thumbnail} alt="Card image cap" />
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

                        )
                    ))}
                </div>
            </section>
        ))
    }

    return (
        <section className="book-shelfs">
            {renderShelf()}
        </section>
    )
}

