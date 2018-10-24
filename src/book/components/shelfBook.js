import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <div key={props.book.id} className="card mb-3 shadow-sm">
        <Link to={`/books/${props.book.id}`}>
            <img className="rounded book-cover" src={props.book.imageLinks.thumbnail} alt="Card image cap" />
        </Link>
        <div className="card-body">
            <h6 className="card-title">{props.book.title}</h6>
            <div className="book-authors">
                {props.book.authors !== undefined && (
                    props.book.authors.map((author, i) => (
                        <li key={i}>{author}</li>
                    ))
                )}
            </div>
            <div className="book-shelf-changer">
                <select value={props.book.shelf} onChange={(e) => onChangeShelf(e, props.book)}>
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