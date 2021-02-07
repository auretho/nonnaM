import React from'react';
import './style.scss';

const Nav = () => (
    <nav className="navigation">
        <ul className="navigation-list">
            <a href="home">
                <li className="navigation-list-item">Accueil</li>
            </a>
            <a href="home">
                <li className="navigation-list-item">Huile d'olive</li>
            </a>
            <a href="home">
                <li className="navigation-list-item">Tomates</li>
            </a>
            <a href="home">
                <li className="navigation-list-item">A propos</li>
            </a>
        </ul>
    </nav>
)

export default Nav;