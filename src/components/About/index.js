import React from 'react';
import './style.scss';

const About = ({cupello}) => (
    <div className="about">
        {
        cupello.map((photo, index) => (
            <div className="about-photos" key={index}>
                <img className="about-photo" src={photo} alt="photos de cupello"/>
            </div>
        ))
        }
    </div>
)

export default About;