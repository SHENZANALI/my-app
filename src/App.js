import './App.css';
import ScrollToTop from "react-scroll-to-top";
import Layout from './Components/Layout/Layout';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Project from './pages/Projects/Project';
import Textstack from './pages/Textstack/Textstack';
import Work from './pages/WorkEx/Work';
import Contact from './pages/Contact/Contact'
import MobileNave from './Components/MobileNave/MobileNave';

function App() {
  return (
    <>
    <MobileNave/>
    <Layout/>
    <About/>
    <Education/>
    <Textstack/>
    <Project/>
    <Work/>
    <Contact/>
    <div className='footer'>
      <h4 className='text-center ms-3 mb-3'>
        Made with 🥰 Shenzan ali cheena 
      </h4>
    </div>
    <ScrollToTop smooth style={{backgroundColor:'red',borderRadius:'8px'}}/>
    </>
  );
}

export default App;
