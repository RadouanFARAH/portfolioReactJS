
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home.js';
import Me from './components/Me.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import React from 'react'
import Header from './components/Header'
export class App extends React.Component {
    render() {
        return ( 
        <Router >
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/Me" component={Me} />
                <Route path="/Skills" component={Skills} />
                <Route path="/Projects" component={Projects} />
                <Route path="/Contact" component={Contact} />
            </div>
        </Router>
        )
    }
}

export default App
