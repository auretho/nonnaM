import React from'react';
import { NavHashLink } from 'react-router-hash-link';
import logo from '../../assets/logo-coeurSVG.png';
import MenuIcon from '@material-ui/icons/Menu';

import './style.scss';

const Nav = ({navlinks, burgerOpened, handleBurger}) => {
    const handleBurgerClick = () => {
        handleBurger()
    }

    return(
    <nav className="navigation">
        <div className="navigation-block">
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
        </div>
        {/* ============== MOBILE ONLY ================ */}
        <div className="mobile-nav">
            <MenuIcon className="navigation-burger" style={{ color: 'black', fontSize: 40 }} onClick={handleBurgerClick} />
        
            <ul className={burgerOpened ? "navigation-list-mobile" : "navigation-list-mobile-hidden"}>
            {
            navlinks.map((link, i) => (
                <NavHashLink smooth exact to={`${link.location}${link.anchor}`} key={i} className="navigation-link"  onClick={handleBurgerClick}>
                    <li className="navigation-list-item">{link.name}</li>
                </NavHashLink>
            ))
            }
            </ul>

        </div>
    </nav>
)}

export default Nav;