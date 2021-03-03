import React from'react';
import oil from '../../../assets/oil.png';
import './style.scss';

const Contact = () => (
    <div className="contact" id="contact">
        <div className="contact-div">
            <h1 className="contact-title">
                Vous voulez commander?
            </h1>
            <div className="contact-details">
                <h2>Luca Lucarelli</h2>
                <a href="mailto: luca@nonna-m.com" className="contact-email">luca@nonna-m.com</a>
                <h2 className="contact-tel">+33 12 34 56 78 43</h2>
            </div>
            <a href="#header">
                <img src={oil} alt="" className="contact-image"/>
            </a>
        </div>
    </div>
)

export default Contact;