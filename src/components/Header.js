import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './Header.css'
import logo from '../assests/img/logo.png'

export class Header extends Component {
    render() {
        return (
            <nav>               
                <Link to="/"><img src={logo} className="logo" alt='nothing'></img></Link>   
                <Link to="/Contact" className="item">Contact</Link> 
                <Link to="/Projects" className="item">Projects</Link>
                <Link to="/Skills" className="item">Skills</Link>
                <Link to="/Me" className="item">About Me</Link>
            </nav>
        )
    }
}

export default Header
