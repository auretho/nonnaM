import {useEffect} from 'react';
import './style.scss';

const Cgu = ({legals}) => {

    return(
    <div className="legals">
        <div className="legals-container">
            <h1 className="legals-title">Conditions générales d'utilisation</h1>
            <p className="legals-text">{legals.cgu}</p>
        </div>
    </div>
)}

export default Cgu;