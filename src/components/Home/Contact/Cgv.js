import {useEffect} from 'react';
import './style.scss';

const Cgv = ({legals}) => {

    return(
    <div className="legals">
        <div className="legals-container">
            <h1 className="legals-title">Conditions générales de vente</h1>
            <p className="legals-text">{legals.cgv}</p>
        </div>
    </div>
)}

export default Cgv;