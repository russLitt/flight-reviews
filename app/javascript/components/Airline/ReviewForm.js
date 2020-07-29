import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-color: white;
`

const ReviewForm = (props) => {
    return(
        <div className="wrapper">
            <form onSubmit={props.handleSubmit}>
                <div>Share your experience with {props.attributes.name} and leave a review</div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title" />
                </div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.descripion} type="text" name="description" placeholder="Review Description" />
                </div>
                <div className="field">
                    <div className="rating-container">
                        <div className="rating-title-text">Rate this Airline</div>
                        [Star rating here]
                    </div>
                </div>
                <button type="submit">Submit this review</button>
            </form>
        </div>
    )
}

export default ReviewForm