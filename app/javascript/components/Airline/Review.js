import React from 'react'
import Rating from '../Rating/Rating'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #e6e6e6;
  padding: 20px;
  margin: 0 30px 20px 0;
`
const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Title = styled.div`
  padding: 20px 0 0 0;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`

const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 16px;
`

const Review = (props) => {
    const { score, title, description } = props.attributes
    return (
        <Card>
            <RatingContainer>
                <Rating score={score}/>
            </RatingContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Card>
    )
}

export default Review