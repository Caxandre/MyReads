import React from 'react'

export default props => (
    <div className="shelf-header">
        <h1 className="h3">
            {props.shelf === "currentlyReading" && ("Currently Reading")}
            {props.shelf === "wantToRead" && ("Want To Read")}
            {props.shelf === "read" && ("Read")}
        </h1>
        <hr></hr>
    </div>
)