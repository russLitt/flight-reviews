import React from 'react'

const Review = (props) => {
    const { score, title, description } = props.attributes
    return (
        <div className="cards">
            <div className="ratingContainer">
                <div className="ratingScore">{score}</div>
            </div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
    )
}

export default Review