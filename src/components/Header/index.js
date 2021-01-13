import React from 'react';
import Selfie from '../img/Me.jpg'

function Header() {
    return (
        <div className='header' >
            <div>
                <img className="headerImg" src={Selfie} alt='TravisGray' />
            </div>
            <div className="headerInfo">
                <h4>Travis Gray</h4>
                <h5><a className="clickLink" href='mailto:TravisGray420@gmail.com'>TravisGray420@gmail.com</a></h5>
                <h5>Ph: 385-232-5407</h5>
            </div>
        </div>
    )
}

export default Header;