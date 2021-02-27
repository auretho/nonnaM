import React from'react';
// import { Parallax } from 'react-parallax';
import ciel from '../../../assets/ciel.png';
import ville from '../../../assets/ville.png';
import terrain from '../../../assets/terrain2.png';


import './style.scss';
import logo from '../../../assets/test-new-logo5.png';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const Header = () => {
    
    const translate = document.querySelectorAll('.translate');
    const handleScroll = () => {
        const scroll = window.pageYOffset;
        
        translate.forEach( element => {
            const speed = element.dataset.speed;
            element.style.transform = `translateY(${scroll * speed}px)`;
        })
    }


    window.addEventListener('scroll', handleScroll);


    return(
    <header>
        <section>
            <div className="header" >
                <div className="header-logo translate" data-speed="0.1">
                    <div className="header-top">
                       <img className="header-title-logo" src={logo} alt="logo"/>
                    </div>
                    <div className="header-bottom">
                        <h2 className="header-subtext">Notre histoire, notre terre, nos produits pour vous</h2>
                    </div>
                </div>

                <h3 className="header-subtitle">C'est ici que commence notre histoire </h3>
                <DoubleArrowIcon className="header-arrows" style={{ fontSize: 50 }}/>
            </div>
        </section>
            <div style={{ height: '100vh'}}>
            <img className="translate" src={ciel} alt="" 
                 style={{
                     width: '100vw', 
                     position: 'relative', 
                     zIndex: '-2'
                }}
                 data-speed="0.1"
            />
            <img className="translate" src={ville} alt="" 
                 style={{
                     width: '100vw', 
                    //  height: '200px',
                     position:'relative',
                     top: '-14%',
                     zIndex: '-2'
                     }}
                 data-speed="-0.2"
            />
            <img className="translate" src={terrain} alt="" 
                 style={{
                     width: '100vw', 
                    //  height: '100%',
                     position:'relative',
                     top: '-32.5%',
                     zIndex: '-2'
                     }}
                 data-speed="-0.4"
            />
            </div>

        <div className="header-shadow"></div>
    </header>
)}

export default Header;