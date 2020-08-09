import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`
const AirlineLogo = styled.div`
  margin: auto;

  img {
    margin-top: 20px;
    height: 80px;
    width: 80px;
    border: 1px solid #efefef;
    padding: 10px;
  }
`
const AirlineName = styled.div`
  padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
      color: #fff;
      background: #000;
      border-radius: 4px;
      padding: 10px 50px;
      border: 1px solid #000;
      text-decoration: none;
  }
`

const Airline = (props) => {
  const average_score = parseFloat(props.average_score / 100)
  
    return(
        <Card>
            <AirlineLogo>
                <img src={props.attributes.image_url} alt={props.attributes.name}/></AirlineLogo>
            <AirlineName>{props.attributes.name}</AirlineName>
            <div className="airline-score">{props.attributes.avg_score}</div>
            <LinkWrapper>
                <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
            </LinkWrapper>
        </Card>
    )
}

export default Airline