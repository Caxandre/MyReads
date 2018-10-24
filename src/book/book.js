import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import BookList from './components/bookList'
import SearchButton from '../template/searchButton'
import Loading from '../template/loading';

export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            shelfs: ["currentlyReading", "wantToRead", "read"],
            loading: false
        }
        this.handleMoveToShelf = this.handleMoveToShelf.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true })
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books,
                    loading: false
                }))
            })
            .catch(error => console.log('[Error] -> ' + error))
    }

    handleMoveToShelf(e, bookToUpdateShelf) {
        const shelf = e.target.value;
        bookToUpdateShelf.shelf = shelf;
        this.setState({ loading: true })
        this.setState((state) => {
            BooksAPI.update(bookToUpdateShelf, shelf).then(response => {
                bookToUpdateShelf.shelf = shelf;
                const updateBooks = state.books.filter((b) => b.id !== bookToUpdateShelf.id)
                updateBooks.push(bookToUpdateShelf)
                this.setState({
                    books: updateBooks,
                    loading: false
                })
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.loading && <Loading />}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item container active" aria-current="page">Home</li>
                    </ol>
                </nav>
                <div className="container">
                    <BookList
                        shelfs={this.state.shelfs}
                        books={this.state.books}
                        onChangeShelf={this.handleMoveToShelf}/>
                    <SearchButton />
                </div>
            </div>
        )
    }
}