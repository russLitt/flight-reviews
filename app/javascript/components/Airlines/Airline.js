import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Rating from '../Rating/Rating'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;

  &:hover{
    border-color: SteelBlue;
    background: AliceBlue;
    transition: ease-in-out 0.3s;
  }
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
  type: button;
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background-color: SteelBlue;
    border-radius: 4px;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid SteelBlue;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
    width: 70%;
    transition: ease-in-out 0.3s;

    &:hover{
      border-color: SteelBlue;
      background: LightSteelBlue;
    }
  }
`

const Airline = (props) => {
  const average_score = parseFloat(props.average_score / 100)
  
    return(
        <Card>
            <AirlineLogo>
                <img src={props.attributes.image_url} alt={props.attributes.name}/></AirlineLogo>
            <AirlineName>{props.attributes.name}</AirlineName>
            <Rating score={props.attributes.avg_score}/>
            <LinkWrapper>
                <Link to={`/airlines/${props.attributes.slug}`} class="btn">View Airline</Link>
            </LinkWrapper>
        </Card>
    )
}

export default Airline