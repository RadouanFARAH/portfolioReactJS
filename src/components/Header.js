import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './Header.css'
import logo from '../assests/img/logo.png'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lgnavbar-dark bg-primary">
                <Link to="/"><img src={logo} className="logo mr-auto" alt='nothing'></img></Link>  
                <ul className="ml-auto">               
                <Link to="/Contact" className="item">Contact</Link> 
                <Link to="/Projects" className="item">Projects</Link>
                <Link to="/Skills" className="item">Skills</Link>
                <Link to="/Me" className="item">About Me</Link>
                </ul>
            </nav>
        )
    }
}

export default Header
