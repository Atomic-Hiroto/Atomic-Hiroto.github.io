import React from 'react';
import {Link} from "react-scroll"

function NavBar(props) {
    return (
        <div id='nav-menu'>
            <div>
            <Link smooth={true} duration={500} to='home'><p id="user-detail-name">PRITAM</p></Link>
            </div>
            <div >
                <Link smooth={true} duration={500} to='home'><a className="nav-link home">HOME</a></Link>
                <Link smooth={true} duration={500} to='about'><a className="nav-link about">ABOUT</a></Link>
                <Link smooth={true} duration={500} to='skills'><a className="nav-link skills">SKILLS</a></Link>
                <Link smooth={true} duration={500} to='projects'><a className="nav-link projects">PROJECTS</a></Link>
                <Link smooth={true} duration={500} to='contact'><a className="nav-link contact">CONTACT</a></Link>
                <a className="nav-link resume">RESUME</a>
            </div>
        </div>
    );
}

export default NavBar;