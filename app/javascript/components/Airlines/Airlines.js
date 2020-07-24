import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Airline from './Airline'
import styled from 'styled-components'

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  `
const Heading = styled.div`
  padding: 100px 100px 10px 100px;
  
  h1 {
      font-size: 40px;
  }
  `
const Subheading = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
`

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(()=> {
      //get all airlines from api
      //update airlines in our state
      axios.get('/api/v1/airlines.json')
      .then( resp => {
          setAirlines(resp.data.data)
      })
      .catch( resp => console.log(resp) )
  }, [airlines.length])

  const grid = airlines.map( item => {
  return (
    <Airline
      key={item.attributes.name}
      attributes={item.attributes}
    />
    )
  })
    return(
    <Home>
      <Heading>
          <h1>Flight Reviews</h1>
          <Subheading>Unbiased and Honest Airline Reviews</Subheading>
      </Heading>
      <Grid>
        {grid}
      </Grid>
    </Home>
    )
}

export default Airlines