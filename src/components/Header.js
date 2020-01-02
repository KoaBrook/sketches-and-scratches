import React, { Component } from 'react';
import logo from '../img/sketcheslogo.svg';
import { Link } from 'gatsby'

class Header extends Component {
    render() {
        return (
            <div className="row roll">
                <Link to="/">
                <img src={logo} className="header-img" alt="Sketches, Scratches and Scattered Thoughts"></img>
                </Link>
            </div>
        )
    }
}

export default Header