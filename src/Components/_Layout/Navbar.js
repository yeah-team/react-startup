import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={`/${this.props.brand}/member`}>Home</Link>
                <Link to={`/${this.props.brand}/member/deposit`}>Deposit</Link>
            </div>
        );
    }
}

export default Navbar;
