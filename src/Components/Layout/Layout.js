import React from 'react';
import Home from '../../pages/home/Home';
import { BsChevronDoubleLeft,BsChevronDoubleRight } from "react-icons/bs";
import './Layout.css'
import { useState } from 'react';
import Menus from '../Menus/Menus';
const Layout = () => {
    const [toggle,setToggle]=useState(true)
    // change toggle
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    return (
        <>
        <div className='sidebar-section'>
            <div className={toggle? 'sidebar-toggle sidebar':'sidebar'}>
                <div className='sidebar-toggle-icons'>            
                    <p onClick={handleToggle}>
                        {
                            toggle? (<BsChevronDoubleLeft size={30}/>):(<BsChevronDoubleRight size={30}/>)
                        }
                    
                    </p>
                </div>
                <Menus toggle={toggle}/>
            </div>
            <div className='container'>
                <Home/>
            </div>
            </div>   
        </>
    );
}

export default Layout;
