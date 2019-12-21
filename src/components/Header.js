import React, { Component } from 'react';
import logo from '../img/sketcheslogo.svg';
import Navbar from '../components/Navbar'

class Header extends Component {
    render() {
        return (
            <div className="row">
                <a href="/">
                <img src={logo} width="250rem" className="p-0 header-img" alt="Sketches, Scratches and Scattered Thoughts"></img>
                </a>
            </div>
        )
    }
}

export default Header