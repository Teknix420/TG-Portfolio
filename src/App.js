import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
                <BrowserRouter>
                    <Switch>
                        <Route path='/projects' component={Projects} />
                        <Route path='/' component={About} />
                    </Switch>
                </BrowserRouter>

                {/* Footer */}
                <Footer />

            </div >
        )
    }
}

export default App;