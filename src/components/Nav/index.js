import React from'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-coeurSVG.png';
import './style.scss';

const Nav = () => (
    <nav className="navigation">
         <NavLink exact to="/" className="navigation-full-logo">
            <img className="navigation-logo" src={logo} alt="logo"/>
        </NavLink>
        
        <ul className="navigation-list">
            <NavLink exact to="/">
                <li className="navigation-list-item">Notre histoire</li>
            </NavLink>
            <NavLink to="/produits">
                <li className="navigation-list-item">Huile d'olive</li>
            </NavLink>
            <a href="#produits">
                <li className="navigation-list-item">Tomates</li>
            </a>
            <NavLink to="/produits/artichauts">
                <li className="navigation-list-item">Artichauts</li>
            </NavLink>
            <NavLink to="/about">
                <li className="navigation-list-item">A propos</li>
            </NavLink>
        </ul>
    </nav>
)

export default Nav;