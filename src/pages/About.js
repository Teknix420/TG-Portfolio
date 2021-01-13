import React from 'react';

function About() {
    return (
        <div className="aboutMe">
            <h3>About Me</h3>
            <p>Welcome! I built this website to demonstrate and showcase the skills I have acquired through the Bootcamp program I am/was enrolled in through the University of Utah.</p>
            <p>Languages and Packages I have used during my adventure through the Bootcamp are:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Mysql</li>
                <li>MongoDB</li>
                <li>API's</li>
                <li>Node.Js</li>
                <li>Express</li>
            </ul>
            <p>To view some of my projects and assignments, please use the navigation bar at the top or you may click <a className="clickLink" href="/portfolio">here</a>.</p>
        </div>
    )
}

export default About;