import React from 'react';
import {Element} from "react-scroll"
import headshot from "../images/h1.jpg"

function Home(props) {
    return (
            <Element id='home' name='home'>
                <div>
                    <img className="home-img" src={headshot} />
                </div>
                <div id="user-detail-intro">
                    <p>Hi, I'm PRI<span className='acc'>TAM</span></p>
                </div>
            </Element>
    );
}

export default Home;