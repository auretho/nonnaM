import React from'react';
import { NavHashLink } from 'react-router-hash-link';
import logo from '../../assets/logo-coeurSVG.png';
import MenuIcon from '@material-ui/icons/Menu';

import './style.scss';

const Nav = ({navlinks}) => (
    <nav className="navigation">
         <NavHashLink smooth to="/#bienvenue" className="navigation-full-logo">
            <img className="navigation-logo" src={logo} alt="logo"/>
        </NavHashLink>
        
        <ul className="navigation-list">
            {
            navlinks.map((link, i) => (
                <NavHashLink smooth exact to={`${link.location}${link.anchor}`} key={i} className="navigation-link">
                    <li className="navigation-list-item">{link.name}</li>
                </NavHashLink>
            ))
            }
        </ul>
        <div className="mobile-nav">
            <MenuIcon className="nav-burger" style={{ color: 'black', fontSize: 45 }} /*open={opened ? opened : ""} onClick={onToggle}*/ />
        </div>
    </nav>
)

export default Nav;