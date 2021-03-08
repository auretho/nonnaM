import React from'react';
import { NavHashLink } from 'react-router-hash-link'
import tomate from '../../../assets/tomate2.png';
import './style.scss';

const Contact = () => (
    <div className="contact pageSection" id="contact">
        <div className="contact-div">
            <h1 className="contact-title">
                Nous contacter:
            </h1>
            <div className="contact-details">
                <h2>Luca Lucarelli</h2>
                <a href="mailto: luca@nonna-m.com" className="contact-email">luca@nonna-m.com</a>
                <h2 className="contact-tel">+33 12 34 56 78 43</h2>
            </div>
            <NavHashLink smooth to="#bienvenue">
                <img src={tomate} alt="" className="contact-image"/>
            </NavHashLink>
        </div>
    </div>
)

export default Contact;