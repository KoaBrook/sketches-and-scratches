import React, { Component } from 'react';
import logo from '../img/sketchlogo.png';
import { Link } from 'gatsby'

class Header extends Component {
    render() {
        return (
                <div className="columns">
                    <div className="column is-half">
                    <Link to="/">
                        <img src={logo} className="header-img" alt="Sketches, Scratches and Scattered Thoughts"></img>
                    </Link>
                    </div>
            </div>
        )
    }
}

export default Header

