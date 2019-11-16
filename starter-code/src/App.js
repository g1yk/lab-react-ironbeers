import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Switch, Link, Route } from 'react-router-dom'
import Beers from './Beers'
import Random from './Random'
import NewBeer from './NewBeer'
import BeerDetail from './BeerDetail'

class App extends Component {

  componentDidMount() {

    this.getAllBeers()

  }


  getAllBeers = () => {

    axios.get('http://ih-beers-api2.herokuapp.com/beers').then(allTheBeers => {
      console.log(allTheBeers)
    })
  }


  getRandomBeer = () => {

    axios.get('http://ih-beers-api2.herokuapp.com/beers/random').then(randomBeer => {
      console.log(randomBeer)
    })

  }

  render() {
    return (
      <div className="App">

        <nav>
          <Link to="/beers">Beers |</Link>
          <Link to="/random-beer"> Random Beer | </Link>
          <Link to="/new-beer">New Beer</Link>

        </nav>
        <Switch>
          <Route path="/beers" component={Beers} />
          <Route path="/random-beer" component={Random} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/beer-detail/:beerId" component={BeerDetail} />




        </Switch>

      </div>
    );
  }
}

export default App;
