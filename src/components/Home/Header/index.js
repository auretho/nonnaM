import React from'react';
import ciel from '../../../assets/ciel1.png';
import ville from '../../../assets/ville1.png';
import terrain from '../../../assets/terrain1.png';
import logo from '../../../assets/logo-coeurSVG.png';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import './style.scss';

const Header = ({handleHeaderScroll}) => {
    
    React.useEffect(() => {
        handleHeaderScroll();
    }, [])

    return(
        <div id="home">
            <header>
                <div className="header" >
                    <div className="header-logo translate" data-speed="0.6">
                        <div className="header-top">
                            <img className="header-title-logo" src={logo} alt="logo"/>
                        </div>
                        <div className="header-bottom">
                            <h2 className="header-subtext">Notre histoire, notre terre, nos produits pour vous</h2>
                        </div>
                    </div>
                    <div className=" header-subtitle-block translate" data-speed="0.4" style={{zIndex:'60'}}>
                        <h3 className="header-subtitle">C'est ici que commence notre histoire </h3>
                        <DoubleArrowIcon className="header-arrows" style={{ fontSize: 50 }}/>
                    </div>
                </div>

                <img className="translate header-bg-sky" src={ciel} alt="" data-speed="0.4" />
                <img className="translate header-bg-town" src={ville} alt="" data-speed="0.3"/>
                <img className="translate header-bg-field" src={terrain} alt="" data-speed="0.2"/>

            </header>
            <section>
                <div className="header-shadow" ></div>
            </section>
        </div>
           

)}

export default Header;