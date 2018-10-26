import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import BookShelf from '../books/bookShelfs'
import BookDetails from '../books/bookDetails'
import Search from '../search/search'

export default props => (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={BookShelf} />
            <Route exact path='/books/:id' component={BookDetails} />
            <Route exact path='/search' component={Search} />
        </div>
    </BrowserRouter>
)



