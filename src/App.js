import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Styling
import './style.css';

// Pages
import Projects from './pages/Projects';
import About from './pages/About';

// Components
// Nav Bar Component
import Nav from './components/Nav';

// Header Component
import Header from './components/Header';
// Project Component

// Footer Component
import Footer from './components/Footer';


class App extends Component {

    render() {
        return (
            <div className="main">
                {/* NavBar */}
                <Nav />
                {/* Header */}
                <Header />
                {/* Routing */}
                <Route exact path='/' component={About} />
                <Route path='/projects' component={Projects} />
                {/* Footer */}
                <Footer />
            </div >
        )
    }
}

export default App;