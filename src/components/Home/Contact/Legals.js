import {useEffect} from 'react';
import './style.scss';

const Legals = ({legals}) => {

    return(
    <div className="legals">
        <div className="legals-container">
            <h1 className="legals-title">Mentions légales</h1>
            <p className="legals-text">{legals.legals}</p>
        </div>
    </div>
)}

export default Legals;