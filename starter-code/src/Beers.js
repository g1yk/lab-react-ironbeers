import React, { Component } from 'react'
import Axios from 'axios'
import { Switch, Link, Route } from 'react-router-dom'


class Beers extends Component {

    state = {
        allTheBeers: []
    }

    componentDidMount() {
        this.getAllBeers()

    }

    getAllBeers = () => {
        Axios.get('http://ih-beers-api2.herokuapp.com/beers').then(allTheBeers => {
            console.log(allTheBeers)
            this.setState({
                allTheBeers: allTheBeers.data
            })
        })
    }

    showTheBeers = () => {
        return this.state.allTheBeers.map(eachBeer => {
            return (
                <li>
                    <Link to={`/beer-detail/${eachBeer._id}`}>
                        <h4>{eachBeer.name}</h4>
                        <img src={eachBeer.image_url} width='50px' alt='beer' />
                        <p>{eachBeer.description}</p>
                    </Link>
                </li>)
        })
    }


    render() {
        return (
            <div>
                {this.showTheBeers()}
            </div>
        )
    }
}
export default Beers

