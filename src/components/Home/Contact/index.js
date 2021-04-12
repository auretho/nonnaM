import React from'react';
import {Link} from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link'
import logo from '../../../assets/coeur-solo.png';
import './style.scss';

const Contact = () => {
    let mobile = false;

    if(window.innerWidth <= 488){
        mobile = true;
    }

    return(
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
                {
                    mobile ?
                    <h2 className="contact-tel">
                        <a href="tel:+33651153875">+33 (0)6 51 15 38 75</a>
                    </h2>
                    :
                    <h2 className="contact-tel">+33 (0)6 51 15 38 75</h2>

                }
            </div>
            <NavHashLink smooth to="#bienvenue">
                <img src={logo} alt="" className="contact-image"/>
            </NavHashLink>
        </div>
        <div className="contact-footer">
            <ul className="contact-footer-list">
                <Link to="/mentions-legales">
                    <li className="contact-footer-item">Mentions légales</li>
                </Link>
                <Link to="/CGV">
                    <li className="contact-footer-item">CGV</li>
                </Link>
                <Link to="/CGU">
                    <li className="contact-footer-item">CGU</li>
                </Link>
            </ul>
                <h1 className="contact-footer-signature">
                    Aurélie Thouzeau 2021
                </h1>
        </div>
    </div>
)}

export default Contact;