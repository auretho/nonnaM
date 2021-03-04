import React from'react';
import { NavHashLink } from 'react-router-hash-link';
import logo from '../../assets/logo-coeurSVG.png';
import './style.scss';

const Nav = () => (
    <nav className="navigation">
         <NavHashLink exact smooth to="#header" className="navigation-full-logo">
            <img className="navigation-logo" src={logo} alt="logo"/>
        </NavHashLink>
        
        <ul className="navigation-list">
            <NavHashLink exact smooth to="/#header">
                <li className="navigation-list-item">Notre histoire</li>
            </NavHashLink>
            <NavHashLink smooth to="#product">
                <li className="navigation-list-item">Huile d'olive</li>
            </NavHashLink>
            <NavHashLink smooth to="#product">
                <li className="navigation-list-item">Tomates</li>
            </NavHashLink>
            <NavHashLink smooth to="#product">
                <li className="navigation-list-item">Artichauts</li>
            </NavHashLink>
            <NavHashLink exact smooth to="/#process">
                <li className="navigation-list-item">L'origine des produits</li>
            </NavHashLink>
            <NavHashLink to="/about">
                <li className="navigation-list-item">A propos</li>
            </NavHashLink>
            <NavHashLink smooth to="#contact">
                <li className="navigation-list-item">Contact</li>
            </NavHashLink>
        </ul>
    </nav>
)

export default Nav;