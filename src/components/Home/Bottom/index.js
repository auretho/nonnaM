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
                <a href="mailto: luca@nonnaM.com" className="bottom-email">luca@nonnaM.com</a>
            </div>
            <img src={oil} alt="" className="bottom-image"/>
        </div>
    </div>
)

export default Bottom;