import React from 'react';

function About() {
    return (
        <div className="aboutMe">
            <h3>About Me</h3>
            <p>Welcome! I built this website to demonstrate the skills I have acquired through the Bootcamp program I am/was enrolled in through the University of Utah.</p>
            <p>Some of the technologies, languages, and packages I have used during my adventure through the Bootcamp are:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node.Js</li>
                <li>ReactJs</li>
                <li>Express</li>
                <li>Mysql</li>
                <li>MongoDB</li>
                <li>API's</li>
            </ul>
            <p>There are a lot more but these are just the major ones to note.</p>
            <p>To view some of my projects and assignments, please use the navigation bar at the top or you may click <a className="clickLink" href="/TG-Portfolio/#/projects">here</a>.</p>
        </div>
    )
}

export default About;