import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
    const renderSearchForm = () => {
        return (
            <section role="form" className="searchForm">
                <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <Link className="input-group-text return-button" to='/'></Link>
                        </div>
                        <input id="query"
                            className="form-control"
                            placeholder="Search for title or authors..."
                            onChange={(e) => props.updateQuery(e.target.value)}
                        ></input>
                    </div>
                </div>
            </section >
        )
    }
    
    return (
        <section>
            {renderSearchForm()}
        </section>
    )
}