import React from 'react';
import './About.css'
import Fade from 'react-reveal/Fade';
import image from "../../Components/images/IMG-20221122-WA0041.jpg"

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='row'>
                <Fade left>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-image'>
                <img src={image} alt="my image" />
            </div>
            </Fade>
            <Fade right>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-context'>
                <h1>About Me</h1>
                <p>I'M Shenzan Ali Cheena. I am from Mankkera, Bhakkar. My continues dgree is BS Software Enginering.
                    I crruntly working on Website development. My core programing language is JavaScript.
                </p>
            </div>
            </Fade>
            </div>
            
        </div>
    );
}

export default About;
