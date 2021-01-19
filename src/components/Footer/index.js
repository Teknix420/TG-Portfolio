import React from 'react';
import Facebook from '../img/Facebook.png';
import LinkedIn from '../img/LinkedIn.png';
import Gmail from '../img/Gmail.png';
import Github from '../img/Github.png';

function Footer() {
    return (
        <footer>
            <div className="container">
                <a target="_blank" rel="noopener noreferrer" className="footerLink" href="https://www.facebook.com/Teknix420"><img src={Facebook} alt="Facebook" height="32px" /></a>
                <a target="_blank" rel="noopener noreferrer" className="footerLink" href="https://www.linkedin.com/in/travis-gray-0259b1a6/"><img src={LinkedIn} alt="LinkedIn" height="32px" /></a>
                <a target="_blank" rel="noopener noreferrer" className="footerLink" href="mailto:TravisGray420@gmail.com"><img src={Gmail} alt="Email" height="32px" /></a>
                <a target="_blank" rel="noopener noreferrer" className="footerLink" href="https://www.github.com/Teknix420"><img src={Github} alt="Github" height="32px" /></a>
            </div>
        </footer>
    )
}

export default Footer;