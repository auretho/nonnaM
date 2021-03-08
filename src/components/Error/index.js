import React from'react';
import { Link } from 'react-router-dom';
import coeur from '../../assets/coeur-solo.png';
import './style.scss';

const Error = () => (
    <div className="error">
        <div className="error-text">
            <h1>404 page not found</h1>
            <Link to="/#bienvenue">
                <img src={coeur} alt="logo" className="error-logo"/>
            </Link>
        </div>
    </div>
)

export default Error;