import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 100px 50px 100px 0;
  
  img {
    height: 80px;
    width: 80px;
  }
  
  h1 {
    font-size: 30px;
  }
`

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`
const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`

const Header = (props) => {
    const {name, image_url, avg_score} = props.attributes
    const total = props.reviews.length
    return(
        <Wrapper>
          <h1><img src={image_url} alt={name} /> {name}</h1>
            <div>
            <TotalReviews>{total} User Reviews</TotalReviews>
            <div className="starRating"></div>
            <TotalOutOf>{avg_score} out of 5</TotalOutOf>
          </div>
        </Wrapper>
    )
}

export default Header