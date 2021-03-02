import React from'react';
import oil from '../../../assets/oil2.png';
import './style.scss';

const Bottom = () => (
    <div className="bottom">
        <div className="bottom-contact">
            <h1 className="bottom-title">
                Vous voulez commander?
            </h1>
            <div className="bottom-details">
                <h2>Luca Lucarelli</h2>
                <a href="mailto: luca@nonna-m.com" className="bottom-email">luca@nonna-m.com</a>
                <h2 className="bottom-tel">+33 12 34 56 78 43</h2>
            </div>
            <a href="#header">
                <img src={oil} alt="" className="bottom-image"/>
            </a>
        </div>
    </div>
)

export default Bottom;