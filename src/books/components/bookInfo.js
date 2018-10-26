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
                        <img src={thumbnail} className="rounded float-left cover" />
                    </div>
                    <div className="col-md-8 px-3">
                        <div className="card-block px-3">
                            <h4>{book.title}</h4>
                            <br></br>
                            <p>{book.description}</p>
                            <p>Publisher: {book.publisher}</p>
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

