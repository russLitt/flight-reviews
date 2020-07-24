import React, { useState, useEffect } from 'react'

const Airline = (props) => {
    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})

    useEffect(()=> {
        console.log(props)
    }, [])

    return(<div>this is the Airlines#show view</div>)
}

export default Airline