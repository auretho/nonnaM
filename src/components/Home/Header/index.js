import React from'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ciel from '../../../assets/cielo.png';
import terrain from '../../../assets/campo.png';
import logo from '../../../assets/logo-coeurSVG.png';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import './style.scss';

const Header = () => (
        <div id="accueil">
            <header >
                <div className="header" >
                    <div className="header-logo translate" data-speed="0.8">
                        <div className="header-top">
                            <img className="header-title-logo" src={logo} alt="logo"/>
                        </div>
                        <div className="header-bottom">
                            <h2 className="header-subtext">Notre histoire, notre terre, nos produits pour vous</h2>
                        </div>
                    </div>
                   
                    <Link to="/back-office" style={{zIndex: '10'}}>
                        <button  >Vers le Back Office</button>
                    </Link>
                   
                    <div className=" header-subtitle-block translate" data-speed="0.4" style={{zIndex:'60'}}>
                        <h3 className="header-subtitle">C'est ici que commence notre histoire... </h3>
                    <HashLink smooth to="/#notre-histoire">
                        <DoubleArrowIcon className="header-arrows" style={{ fontSize: 50 }}/>
                    </HashLink>
                    </div>
                </div>

                <img className="translate header-bg-sky" src={ciel} alt="" data-speed="0.4" />
                <img className="translate header-bg-field" src={terrain} alt="" data-speed="0"/>

            </header>
            {/* <section>
                <div className="header-shadow" ></div>
            </section> */}
        </div>
           

)

export default Header;