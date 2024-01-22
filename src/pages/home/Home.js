import React from "react";
import Typewriter from 'typewriter-effect';
import "./Home.css";
import Slide from 'react-reveal/Slide';
import resume from '../../assets/resume/SHENZAN ALI CHEENA.pdf'

const Home = () => {
  return (
    <>
    <Slide right>
    <div className="container-fluid home-container" id="home">
        <div className="container home-contant">
            <h2>
                HI 👋 I'M A 
            </h2>
            <h1>
            <Typewriter
  options={{
    strings: ['FullStack developer !', 'Mern stack developer !','React native developer !'],
    autoStart: true,
    loop: true,
  }}
/>
            </h1>
            <div className="home-btn">
              <a className="btn btn-outline-danger mx-1" href="https://api.whatsapp.com/send?phone=03495221591"
              rel="noreferre"
              target="_blank">Whatsapp</a>
                <a className="btn btn-outline-danger mx-2" href={resume} download={"shenzan-Ali.pdf"}> My resume</a>
            </div>

        </div>

    </div>
    </Slide>
    </>
  );
};

export default Home;