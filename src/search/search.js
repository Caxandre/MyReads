import React, { Component } from 'react'
import { debounce } from 'lodash';
import * as BooksAPI from '../utils/BooksAPI'
import SearchForm from './components/searchForm'
import SearchResults from './components/searchResults'
import NoResults from './components/noResults';
import Loading from '../template/loading';
import ReturnButton from '../template/returnButton'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            books: [],
            onTheShelf: [],
            loading: false,
            error: false,
        }
        this.updateQuery = this.updateQuery.bind(this)
        this.handleMoveToShelf = this.handleMoveToShelf.bind(this);
    }

    handleSearch = () => {
        BooksAPI.getAll().then(books => {
            this.setState({ onTheShelf: books }, () => {
                BooksAPI.search(this.state.query).then(data => {
                    if (data) {
                        if (data.error) this.setState({
                            error: true,
                            books: [],
                            loading: false
                        })
                        else {
                            data = data.map(book => {
                                this.setState({ loading: false })
                                book.shelf = 'none'
                                const aux = this.state.onTheShelf.filter(b => b.id === book.id)
                                if (aux.length > 0) {
                                    book.shelf = aux[0].shelf
                                }
                                return book;
                            })
                            this.setState({
                                books: data,
                                error: false,
                                loading: false
                            });
                        }
                    }
                });
            })
        })
    };

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

    updateQuery = debounce(query => {
        this.setState({ loading: true })
        this.setState({ query: query.trim() }, () => {
            if (this.state.query.trim().length > 0) { this.handleSearch(); }
            else this.setState({
                books: [],
                error: false,
                query: '',
                loading: false
            });
        });
    }, 950);

    render() {
        return (
            <div>
                {this.state.loading && <Loading />}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item search-bradcumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Search</li>
                    </ol>
                </nav>
                <div className="container">
                    <ReturnButton />
                    <SearchForm
                        query={this.state.query}
                        updateQuery={this.updateQuery}
                    />
                    <SearchResults
                        books={this.state.books}
                        onChangeShelf={this.handleMoveToShelf}
                    />
                    {this.state.error && <NoResults />}
                </div>
            </div>
        )
    }
}