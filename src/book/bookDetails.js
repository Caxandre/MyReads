import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import BookInfo from './components/bookInfo'
import { Link } from 'react-router-dom'
import SearchButton from '../template/searchButton'

export default class BookDetails extends Component {

    state = {
        book: []
    }

    componentDidMount() {
        const bookId = this.props.match.params.id
        BooksAPI.get(bookId)
            .then(book => {
                this.setState({
                    book: book
                })
            })
            .catch(error => console.log('[Error] -> ' + error))
    }

    render() {

        const { book } = this.state
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item search-bradcumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item">Books</li>
                        <li className="breadcrumb-item active" aria-current="page">{book.title}</li>
                    </ol>
                </nav>

                <Link to='/'>
                    <div className="return-button-book"></div>
                </Link>

                <BookInfo book={this.state.book} />
                <SearchButton />
            </div>
        )
    }


}
