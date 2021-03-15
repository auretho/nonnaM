import React from'react';
import { NavHashLink } from 'react-router-hash-link'
import logo from '../../../assets/coeur-solo.png';
import './style.scss';

const Contact = () => (
    <div className="contact pageSection" id="contact">
        <div className="contact-div">
            <h1 className="contact-title">
                Nous contacter:
            </h1>
            <h2 className="contact-subtitle">
                N'hésitez pas à nous envoyer vos commandes, idées recettes ou questions!
            </h2> 
            <div className="contact-details">
                <h2>Luca Lucarelli</h2>
                <a href="mailto: luca@nonna-m.com" className="contact-email">luca@nonna-m.com</a>
                <h2 className="contact-tel">+33 (0)6 51 15 38 75</h2>
            </div>
            <NavHashLink smooth to="#bienvenue">
                <img src={logo} alt="" className="contact-image"/>
            </NavHashLink>
        </div>
    </div>
)

export default Contact;