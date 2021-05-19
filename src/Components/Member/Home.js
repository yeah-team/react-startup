import React, { Component } from 'react';
import Navbar from '../_Layout/Navbar';

class Home extends Component {

    constructor(props) {
        super(props);
        this.brand = this.props.match.params.brand;
    }

    render() {
        return (
            <div>
                <Navbar brand={this.brand}></Navbar>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;
