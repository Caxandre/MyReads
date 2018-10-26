import React from 'react'
import ShelfHeader from './shelfHeader'
import Book from './book'

export default props => {
    const books = props.books
    const renderShelf = () => {
        {console.log(JSON.stringify(books))}
        return props.shelfs.map(shelf => (
            <section key={shelf}>
                <ShelfHeader shelf={shelf} />
                <div className="card-deck mb-3">
                    {books.map(book => (
                        book.shelf === shelf && (
                            <Book
                                book={book}
                                key={book.id}
                                onChangeShelf={props.onChangeShelf}
                            />
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

