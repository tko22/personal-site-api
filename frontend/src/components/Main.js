import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import classnames from 'classnames';

import AboutMe from "./AboutMe";
import Banner from "./Banner"
import Reveal from 'react-reveal';
import Resume from "./Resume"; // this package

class Main extends Component {
    render() {
        return(
            <div className="main">
                <Banner/>
                <AboutMe/>
                <Resume/>
            </div>
        );
    }
}

export default Main;