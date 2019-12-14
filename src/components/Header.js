import React, { Component } from 'react';
import logo from '../img/logo.png';

class Header extends Component {
    render() {
        return (
            <div className="p-0 mb-3">
                <a href="/">
                <img src={logo} className="p-0" alt="Sketches, Scratches and Scattered Thoughts"></img>
                </a>
            </div>
        )
    }
}

export default Header