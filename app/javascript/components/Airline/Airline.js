import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr)
`

const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;
  
  &:last-child {
    background: #000;
  }
`

const Main = styled.div`
  padding-left: 30px;
`

const Button = styled.div`
  /*text-decoration: none;*/
`

const Airline = (props) => {
    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(()=> {
        const slug = props.match.params.slug
        const url = `/api/v1/airlines/${slug}`

        axios.get(url)
        .then( resp => {
            setAirline(resp.data)
            setLoaded(true)
        })
        .catch( data => console.log(resp) )
    }, [])

    const handleChange = (e) => {
      e.preventDefault()

      setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))

      console.log('review:', review)
    }
    
    const handleSubmit = (e) => {
      e.preventDefault()

      const csrfToken = document.querySelector('[name=csrf-token]').content
      axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

      const airline_id = airline.data.id
      axios.post('/api/v1/reviews', {review, airline_id})
      .then(resp => {
        const included = [...airline.included, resp.data]
        setAirline({...airline, included})
        setReview({title:'', description:'', score: 0})
      })
      .catch(resp => {})
    }    

    const setRating = (score, e) => {
      e.preventDefault()

      setReview({...review, score})
    }

    return(
    <Wrapper>
        {
          loaded &&
      <Fragment>
        <Column>
            <Main>
            <Header 
              attributes={airline.data.attributes}
              reviews={airline.included}
            />
            <Button>
              <Link to={'/'}>Back to Home</Link>
            </Button>
            <div className="reviews"></div>
            </Main>
        </Column>
        <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={airline.data.attributes}
              review={review}
              />
        </Column>
        </Fragment>
    }
    </Wrapper>
      
    )
}

export default Airline