import React from'react';
import { NavHashLink } from 'react-router-hash-link';
import logo from '../../assets/logo-coeurSVG.png';
import MenuIcon from '@material-ui/icons/Menu';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import './style.scss';

const Nav = ({navlinks, burgerOpened, handleBurger, handleChange, login, loginSubmit, signupSubmit}) => {
    const handleBurgerClick = () => {
        handleBurger()
    }

    const handleKeyClick = (evt) => {
        const admin = document.querySelector('.login-container');
        admin.classList.contains('hidden') 
        ?
        admin.classList.remove('hidden')
        :
        admin.classList.add('hidden')
        ;
    }

    const handleInputChange = (evt) => {
        const {name, value} = evt.target;
        handleChange({ login: {...login, [name]: value }})
    }

    const handleLoginSubmit = (evt) => {
        evt.preventDefault();
        loginSubmit();
    }

    // const handleSignupSubmit = (evt) => {
    //     evt.preventDefault();
    //     signupSubmit();
    // }

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
            <div className="login">
                <VpnKeyIcon onClick={handleKeyClick}/>
            </div>
            <div className="login-container admin-login hidden">
                <h1>Accès Admin</h1>
                <form onSubmit={handleLoginSubmit}>
                    <input type="email" name="email" placeholder="email" value={login.email} onChange={handleInputChange}/>
                    <input type="password" name="password" placeholder="mot de passe" value={login.password} onChange={handleInputChange}/>
                    <button type="submit">Connexion</button>
                </form>
            </div>

            {/* A VOIR POUR SUPPRIMER!! ================================================= */}
            {/* <div className="signup-container admin-signup">
                <h1>Signup Admin</h1>
                <form onSubmit={handleSignupSubmit}>
                    <input type="email" name="email" placeholder="email" value={login.email} onChange={handleInputChange}/>
                    <input type="password" name="password" placeholder="mot de passe" value={login.password} onChange={handleInputChange}/>
                    <button type="submit">Créer</button>
                </form>
            </div> */}
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