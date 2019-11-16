import React, { Component } from 'react'
import axios from 'axios'

export default class Random extends Component {

    state = {
        randomBeer: {}
    }


    componentDidMount() {
        axios.get('http://ih-beers-api2.herokuapp.com/beers/random').then(randomBeer => {
            return this.setState({
                randomBeer: randomBeer.data
            })
        })
    }
    render() {
        console.log(this)
        return (
            <div>

                {this.state.randomBeer.name}
                <br />
                <img src={this.state.randomBeer.image_url} width='100px' alt='text' />
                <br />
                <p>{this.state.randomBeer.description}</p>


            </div>
        )
    }
}
