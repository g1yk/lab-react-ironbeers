import React, { Component } from 'react'
import axios from 'axios'

export default class BeerDetail extends Component {


    state = {
        beerDetail: {}
    }



    componentDidMount() {

        axios.get(`http://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}
        `).then(beerDetail => {
            this.setState({
                beerDetail: beerDetail.data
            })
        })
    }





    render() {
        console.log(this)
        return (
            <div>

                {this.state.beerDetail.name}
                <br/>
                <br />

                <img src={this.state.beerDetail.image_url} width='100px' alt='beer' />
                <br />
                <br />
                <p>{this.state.beerDetail.description}</p>


            </div>


        )
    }
}
