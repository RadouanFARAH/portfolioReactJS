import React, { Component } from 'react'
import './Me.css'

export class Me extends Component {
    render() {
        return (
    <div>   
        <div class="img-container zoomIn animated">
            <img class="me" src={require('../assests/img/moi.png')} alt=""/>
        </div>
        <div class="msg-container">
            <h1><span>Hi</span>, I'm Redouane FARAH <span role="img" aria-label="smile">&#128578;</span></h1>
            <h3>I'm a Full Stack JavaScript Web Developer, based in Rabat, Morocco. I'm very ambitious when it comes to Development and Programming.</h3>
            <br/>
            <br/>
            <p class="follow animated fadeInUp" >\Follow me/</p>
            <div class="socialMedia animated fadeInUp">
              <a href="https://github.com/RedouaneFARAH" target="_blank"  rel="noopener noreferrer"><i class="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/redouanefarah/" target="_blank"  rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>  
    </div>      
        )
    }
}

export default Me
