import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'

class App extends Component {
    render() {
    return(
        <div class="wrapper">
    <Navbar/>
    <Switch>
        <Route exact path="/" component={Airlines}/>
        <Route exact path="/airlines/:slug" component={Airline}/>
    </Switch>
    </div>
    )
  }
}

export default App