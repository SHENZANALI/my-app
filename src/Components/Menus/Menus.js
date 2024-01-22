import React from 'react';
import './menus.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import profile from '../images/IMG-20221122-WA0041.jpg'
import { TiHomeOutline } from "react-icons/ti";
import { FcAbout, FcBiotech, FcReadingEbook } from "react-icons/fc";
import { GrNetwork } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { LuProjector } from "react-icons/lu";
const Menus = ({toggle}) => {
    return (
        <>
        {toggle ? (
            <>
            <Zoom>
            <div className='nabar-frofile-pic'>
                <img src={profile} alt="profile pic" />
            </div>
            </Zoom>
            <Fade left>
            <div className='nav-items'>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link  to='home' spy={true} smooth={true} offset={-100} duration={100}>
                        <TiHomeOutline color='red'/>
                        Home
                        </Link>
                    </div>
                </div>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcAbout color='red'/>
                        About
                        </Link>
                        
                    </div>
                </div>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcReadingEbook color='red'/>
                        Education Details
                        </Link>
                    </div>
                </div>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='tech' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcBiotech color='red'/>
                        Tech Stack
                        </Link>
                    </div>
                </div>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='projects' spy={true} smooth={true} offset={-100} duration={100}>
                        <LuProjector color='red'/>
                        Projects
                        </Link>
                    </div>
                </div>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='work' spy={true} smooth={true} offset={-100} duration={100}>
                        <GrNetwork color='red'/>
                        Work Experiance
                        </Link>
                    </div>
                </div>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                        <IoIosContact color='red'/>
                        Contact
                        </Link>
                    </div>
                </div>
            </div>
            </Fade>
            </>
        ):(
            <>
            <Fade>
            <div className='nav-items'>
            <div className='nav-item'>
                        <Link  to='home' spy={true} smooth={true} offset={-100} duration={100}>
                        <TiHomeOutline color='red'/>
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcAbout color='red'/>
                        </Link>
                        
                    </div>
                </div>
                <div className='nav-item'>
                        <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcReadingEbook color='red'/>
                        </Link>
                    </div>
                <div className='nav-item'>
                        <Link to='tech' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcBiotech color='red'/>
                        </Link>
                    </div>
                <div className='nav-item'>
                <Link to='projects' spy={true} smooth={true} offset={-100} duration={100}>
                <LuProjector color='red'/>
                </Link>
            </div>
            <div className='nav-item'>
                        <Link to='work' spy={true} smooth={true} offset={-100} duration={100}>
                        <GrNetwork color='red'/>
                        </Link>
                    </div>
                <div className='nav-item'>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                        <IoIosContact color='red'/>
                        </Link>
                    </div>
                    </Fade>
            </>
        )}
                
        </>
    );
}

export default Menus;
