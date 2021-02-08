import React from'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Footer = () => (
    <div className="footer">
        <ul className="footer-list">
            <NavLink to ="legals">
                <li className="footer-list-item">Mentions légales</li>
            </NavLink>
            <NavLink to ="contact">
                <li className="footer-list-item">Contact</li>
            </NavLink>
        </ul>
    </div>
)

export default Footer;