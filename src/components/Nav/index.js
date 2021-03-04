import React from'react';
import { NavHashLink } from 'react-router-hash-link';
import logo from '../../assets/logo-coeurSVG.png';
import './style.scss';

const Nav = () => (
    <nav className="navigation">
         <NavHashLink smooth to="#home" className="navigation-full-logo">
            <img className="navigation-logo" src={logo} alt="logo"/>
        </NavHashLink>
        
        <ul className="navigation-list">
            <NavHashLink smooth to="/#home">
                <li className="navigation-list-item">Accueil</li>
            </NavHashLink>
            <NavHashLink smooth to="/#header">
                <li className="navigation-list-item">Notre histoire</li>
            </NavHashLink>
            <NavHashLink smooth to="#about">
                <li className="navigation-list-item">Photos</li>
            </NavHashLink>
            <NavHashLink smooth to="#product">
                <li className="navigation-list-item">Nos produits</li>
            </NavHashLink>
            {/* <NavHashLink smooth to="#product">
                <li className="navigation-list-item">Tomates</li>
            </NavHashLink>
            <NavHashLink smooth to="#product">
                <li className="navigation-list-item">Artichauts</li>
            </NavHashLink> */}
            <NavHashLink smooth to="#process">
                <li className="navigation-list-item">L'origine des produits</li>
            </NavHashLink>
            <NavHashLink smooth to="#comments">
                <li className="navigation-list-item">Commentaires</li>
            </NavHashLink>

            <NavHashLink smooth to="#contact">
                <li className="navigation-list-item">Contact</li>
            </NavHashLink>
        </ul>
    </nav>
)

export default Nav;