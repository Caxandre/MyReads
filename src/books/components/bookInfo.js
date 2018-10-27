import React from 'react'

export default props => {
    const renderBook = () => {
        const book = props.book;
        const imageFail = "http://andrewcmaxwell.com/wp-content/themes/acm_2014/images/book_not_found.png"
        const getNestedObject = (nestedObj, pathArr) => {
            return pathArr.reduce((obj, key) =>
                (obj && obj[key] !== 'undefined') ? obj[key] : imageFail, nestedObj);
        }
        const thumbnail = getNestedObject(props.book, ['imageLinks', 'thumbnail']);
        return (
            <div className="card book-info">
                <div className="row ">
                    <div className="col-md-4">
                        <img src={thumbnail} className="rounded float-left cover" alt=" " />
                    </div>
                    <div className="col-md-8 px-3">
                        <div className="card-block px-3">
                            <h1 className="h3">{book.title}</h1>
                            <br></br>
                            <dl className="row">
                                <dt className="col-sm-3">Description</dt>
                                <dd className="col-sm-9 text-justify">{book.description || 'Uninformed'}</dd>
                                <dt className="col-sm-3">Publisher</dt>
                                <dd className="col-sm-9">{book.publisher || 'Uninformed'}</dd>
                                <dt className="col-sm-3">Publish Date</dt>
                                <dd className="col-sm-9">{book.publishedDate ? new Date(book.publishedDate + ' ').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Unknown'}</dd>
                                <dt className="col-sm-3">Pages</dt>
                                <dd className="col-sm-9">{book.pageCount || 'Uninformed'}</dd>
                                <dt className="col-sm-3">Categorie(s):</dt>
                                <dd className="col-sm-9">{book.categories ? book.categories.join(', ') : 'Uninformed'}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <section className="container">
            {renderBook()}
        </section>
    )
}

