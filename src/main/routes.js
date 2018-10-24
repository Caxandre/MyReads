import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Book from '../book/book'
import BookDetails from '../book/bookDetails'
import Search from '../search/search'

export default props => (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Book} />
            <Route exact path='/books/:id' component={BookDetails} />
            <Route exact path='/search' component={Search} />
        </div>
    </BrowserRouter>
)



