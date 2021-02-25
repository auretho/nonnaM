import React from'react';
import { Parallax } from 'react-parallax';
import bg from '../../../assets/cupello.png';
import './style.scss';
import logo from '../../../assets/logo10.png';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const Header = () => (
    <header>
        <Parallax bgImage={bg} strength={250}>
            <div className="header" >
                <div className="header-logo">
                    <div className="header-top">
                        <h1 className="header-title">Nonna</h1>
                        <img className="header-title-logo" src={logo} alt="logo"/>
                    </div>
                    <div className="header-bottom">
                        <h2 className="header-subtext">Notre histoire, notre terre, nos produits pour vous</h2>
                    </div>
                </div>

                <h3 className="header-subtitle">C'est ici que commence notre histoire </h3>
                <DoubleArrowIcon className="header-arrows" fontSize="large"/>
            </div>
        </Parallax>
    </header>
)

export default Header;