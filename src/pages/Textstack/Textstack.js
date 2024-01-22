import React from 'react';
import './Textstack.css'
import Flip from 'react-reveal/Flip';
import { techstackList } from '../../utilities/TechstactList';

const Textstack = () => {
    return (
        <>
        <div className='container techstack'>
            <h2 className='col-12 mt-3 mb-2 text-center' id='tech'>Technologies Stack</h2>
            <hr/>
            <Flip left>
            <p className='pb-3 text-center'>👉 including progamming language, framework, databases, front-end and back-end tools, and APIs</p>
            </Flip>
        
            <div className='row cardss'>
                {techstackList.map(tech=>(
                    
                    <div key={tech._id} className='col-md-3'>
                        <Flip right>
                        <div className='card m-2'>
                            <div className='card-content'>
                                <div className='card-body'>
                                    <div className='media d-flex justify-content-center'>
                                        <div className='align-self-center'>
                                            <tech.icon className='tech-icon'/>
                                        </div>
                                        <div className='media-body'>
                                            <h5>{tech.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Flip>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Textstack;
