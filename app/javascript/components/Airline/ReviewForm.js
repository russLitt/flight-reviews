import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-color: white;
`

const ReviewForm = (props) => {
    return(
        <Wrapper>
            <form>
                <div>Share your experience with [airline name] and leave a review</div>
            </form>
        </Wrapper>
    )
}

export default ReviewForm