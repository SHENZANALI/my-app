import React from 'react';
import './MobileNave.css'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from 'react-scroll';

import profile from '../images/IMG-20221122-WA0041.jpg'
import { TiHomeOutline } from "react-icons/ti";
import { FcAbout, FcBiotech, FcReadingEbook } from "react-icons/fc";
import { GrNetwork } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { LuProjector } from "react-icons/lu";
const MobileNave = () => {
    const [open,setopen]= useState(false)

    // handle open
    const handleOpen= ()=>{
        setopen(!open)
    };
    // handle menu clicks
  const handleMenuClick = () => {
    setopen(false);
  };
    return (
        <>
            <div className='mobile-nav'>
                <div className='mobile mobile-header'>
                    {open ? (<AiOutlineMenuFold size={30} className='mobile-nav-icon' onClick={handleOpen}/>)
                    :(<GiHamburgerMenu size={30} className='mobile-nav-icon' onClick={handleOpen}/>)}
                    <span className='mobile-nav-title'>My Portfolio</span>
                </div>
                {open  && ( <div className='mobile-nav-menu'>
                <div className='nav-items'>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link  to='home' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                        <TiHomeOutline color='red'/>
                        Home
                        </Link>
                    </div>
                </div>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                        <FcAbout color='red'/>
                        About
                        </Link>
                        
                    </div>
                </div>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='education' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                        <FcReadingEbook color='red'/>
                        Education Details
                        </Link>
                    </div>
                </div>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='tech' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                        <FcBiotech color='red'/>
                        Tech Stack
                        </Link>
                    </div>
                </div>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='projects' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                        <LuProjector color='red'/>
                        Projects
                        </Link>
                    </div>
                </div>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='work' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                        <GrNetwork color='red'/>
                        Work Experiance
                        </Link>
                    </div>
                </div>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                        <IoIosContact color='red'/>
                        Contact
                        </Link>
                    </div>
                </div>
                </div>
            </div>)}

            </div>
        </>
    );
}

export default MobileNave;
