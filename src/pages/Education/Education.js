import React from 'react';
import { MdSchool } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'

const Education = () => {
    return (
        <>
         <div className='education' id='education'>
         <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          education detail
        </h2>
        <hr /> 
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2020 - 2022"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">ICS</h3>
    <h4 className="vertical-timeline-element-subtitle">FAST Acedmy Fatehpure</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2022 - present"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">BSSE</h3>
    <h4 className="vertical-timeline-element-subtitle">Thal university bhakkar</h4>
  </VerticalTimelineElement>
        </VerticalTimeline>
        </div>  
        </>
    );
}

export default Education;
